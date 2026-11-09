import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Reveal, SiteFooter, SiteHeader } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | AYMO DIGITAL" },
      { name: "description", content: "AYMO DIGITAL Terms of Service — clear commercial agreements, intellectual property ownership, and delivery terms." },
      { property: "og:title", content: "Terms & Conditions | AYMO DIGITAL" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <PageHero
        eyebrow="Commercial Standards"
        title="Terms &amp;"
        highlight="Conditions."
        text="Clear commercial agreements, transparent payment milestones, and 100% intellectual property transfer for our clients."
      />

      <section className="page-shell py-16">
        <Reveal>
          <div className="prose max-w-3xl space-y-8 rounded-xl border border-border bg-card p-8 shadow-soft text-sm leading-7 text-muted-foreground sm:p-12">
            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">1. Agreement to Terms</h2>
              <p className="mt-2">
                By accessing our website or engaging AYMO DIGITAL for digital engineering, software development, design, or growth marketing services, you agree to these Terms and Conditions along with any specific statement of work (SOW) executed between us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">2. Intellectual Property (IP) Ownership</h2>
              <p className="mt-2">
                We believe in total client ownership. Upon final payment of agreed milestone fees, you own 100% of the custom source code, design systems, visual assets, and marketing funnels created specifically for your project. We never lock you into proprietary platforms or claim residual ownership over your digital assets.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">3. Transparent Billing &amp; Payment Milestones</h2>
              <p className="mt-2">
                All development and design projects operate on clear, written milestone schedules (typically deposit upon discovery, midpoint delivery, and final deployment). Marketing retainers are billed on a flat monthly management fee. There are zero markups on your advertising spend — ad platforms are paid directly by you.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">4. Warranty &amp; Post-Launch Support</h2>
              <p className="mt-2">
                Every software platform and custom website we deliver comes with a documented post-launch warranty period (ranging from 30 to 90 days depending on scope) to resolve any functional bugs, browser incompatibilities, or technical errors identified after live deployment.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-extrabold text-foreground">5. Inquiries</h2>
              <p className="mt-2">
                For questions regarding contracts, billing, or enterprise service-level agreements (SLAs), contact our legal and contract team at: <a href="mailto:info@aymo.digital" className="text-primary font-bold hover:underline">info@aymo.digital</a>.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
