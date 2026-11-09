import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bookmark, CheckCircle2, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NewsletterCta, PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";
import { services, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Digital Engineering & Growth Services | Aymo Digital" },
      { name: "description", content: "8 specialist services: custom web platforms, mobile apps, bespoke software, paid advertising, SEO, social media, content marketing, and email automation." },
      { property: "og:title", content: "Digital Engineering & Growth Services | Aymo Digital" },
      { property: "og:description", content: "Revenue-generating digital systems and qualified acquisition funnels for ambitious business owners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const displayIndex = (index + 1).toString().padStart(2, "0");
  return (
    <article className="service-post service-post-detailed">
      <header className="service-post-header">
        <span className="service-post-avatar">AD</span>
        <span>
          <strong>Aymo Digital</strong>
          <small>Service {displayIndex}</small>
        </span>
        <span className="service-post-index">{displayIndex}</span>
      </header>
      <Link to="/services/$service" params={{ service: service.slug }} className="service-image-link">
        <img src={service.image} alt={service.imageAlt} loading="lazy" width={1200} height={800} />
        <span>{service.title}</span>
      </Link>
      <div className="service-post-actions">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={liked ? `Unlike ${service.title}` : `Like ${service.title}`}
          aria-pressed={liked}
          onClick={() => setLiked((value) => !value)}
        >
          <Heart className={liked ? "fill-current text-primary" : ""} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`Comment on ${service.title}`}
          aria-expanded={commenting}
          onClick={() => setCommenting((value) => !value)}
        >
          <MessageCircle />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="ml-auto"
          aria-label={saved ? `Remove ${service.title} from saved` : `Save ${service.title}`}
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
        >
          <Bookmark className={saved ? "fill-current text-primary" : ""} />
        </Button>
      </div>
      <div className="service-post-caption">
        <strong>{liked ? "1 like" : "Be the first to like this"}</strong>
        <p>
          <b>Aymo Digital</b> {service.summary}
        </p>
        <ul>
          {service.deliverables.slice(0, 3).map((point) => (
            <li key={point}>
              <CheckCircle2 />
              {point}
            </li>
          ))}
        </ul>
        {comments.map((item, itemIndex) => (
          <p key={`${item}-${itemIndex}`}>
            <b>You</b> {item}
          </p>
        ))}
        <Link className="arrow-link mt-4" to="/services/$service" params={{ service: service.slug }}>
          View service details <ArrowRight />
        </Link>
      </div>
      {commenting && (
        <form
          className="service-post-comment"
          onSubmit={(event) => {
            event.preventDefault();
            const value = comment.trim();
            if (!value) return;
            setComments((items) => [...items, value]);
            setComment("");
          }}
        >
          <label className="sr-only" htmlFor={`service-page-comment-${index}`}>
            Add a comment
          </label>
          <input
            id={`service-page-comment-${index}`}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Add a comment…"
          />
          <Button type="submit" variant="ghost" size="sm" disabled={!comment.trim()}>
            Post
          </Button>
        </form>
      )}
    </article>
  );
}

function ServicesPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <PageHero
        eyebrow="What we build"
        title="8 services. One"
        highlight="revenue engine."
        text="Every service has a clear scope, defined deliverables, a transparent pricing structure, and a way to measure ROI — so you know exactly what you're investing in."
      />
      <section className="page-shell grid gap-6 py-20 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={(index % 3) * 100}>
            <ServiceCard service={service} index={index} />
          </Reveal>
        ))}
      </section>
      <section className="bg-results text-results-foreground">
        <Reveal className="page-shell flex flex-col items-center gap-6 py-16 text-center">
          <h2 className="max-w-xl font-display text-3xl font-extrabold">
            Not sure what you need?{" "}
            <span className="text-highlight">Start with a free audit.</span>
          </h2>
          <p className="max-w-md text-sm leading-6 text-results-muted">
            We review your current setup and recommend the highest-ROI starting point for your specific business.
          </p>
          <Button asChild variant="results" size="lg">
            <Link to="/contact">
              Request your free audit <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>
      <NewsletterCta />
      <SiteFooter />
    </main>
  );
}
