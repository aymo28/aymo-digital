import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AYMO DIGITAL" },
      { name: "description", content: "AYMO DIGITAL Privacy Policy — how we handle, protect, and respect your company and personal data." },
      { property: "og:title", content: "Privacy Policy | AYMO DIGITAL" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Legal & Data Protection"
        title="Privacy"
        highlight="Policy."
        text="At AYMO DIGITAL, we take client confidentiality and data security seriously. Here is how we collect, handle, and protect your information."
      />

      <section className="page-shell py-16">
        <Reveal>
          <div className="prose max-w-3xl space-y-8 rounded-xl border border-border bg-card p-8 shadow-soft text-sm leading-7 text-muted-foreground sm:p-12">
            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">1. Introduction</h2>
              <p className="mt-2">
                AYMO DIGITAL (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides digital engineering, custom software development, and growth marketing services to clients globally. This policy describes our practices regarding the collection, storage, and processing of personal and business information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">2. Information We Collect</h2>
              <p className="mt-2">
                When you contact us, request a proposal, or engage our services, we collect information you provide directly to us:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Contact details (name, business email, phone number / WhatsApp, country)</li>
                <li>Company information (business name, website URL, industry)</li>
                <li>Project requirements, goals, and technical parameters shared during discovery</li>
                <li>Usage data collected via analytics when navigating our website</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-2">
                We use the information we collect solely to:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Respond to your inquiries and prepare tailored proposals and quotations</li>
                <li>Deliver agreed-upon software engineering, design, and marketing services</li>
                <li>Communicate operational updates regarding active project sprints</li>
                <li>Comply with legal and accounting requirements</li>
              </ul>
              <p className="mt-2 font-medium text-foreground">
                We never sell, rent, or trade your personal or business data to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">4. Client Confidentiality &amp; NDA</h2>
              <p className="mt-2">
                All client source code, database credentials, ad accounts, marketing funnels, and proprietary business metrics are treated as strictly confidential. We are pleased to execute mutual Non-Disclosure Agreements (NDAs) prior to discussing sensitive technical architectures.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">5. Data Security</h2>
              <p className="mt-2">
                We implement robust technical and organizational security measures including TLS encryption, multi-factor authentication, and restricted principle-of-least-privilege access for all project repositories and environments.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">6. Contact Us</h2>
              <p className="mt-2">
                If you have questions regarding this Privacy Policy or wish to exercise your rights under GDPR or local privacy laws, contact us at: <a href="mailto:info@aymo.digital" className="text-primary font-bold hover:underline">info@aymo.digital</a>.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
