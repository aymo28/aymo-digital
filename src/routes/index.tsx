import { createFileRoute } from "@tanstack/react-router";
import { PremiumHome } from "@/components/premium-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aymo Digital | Advanced Marketing Agency" },
      { name: "description", content: "Strategy, creative and performance marketing that helps ambitious brands grow." },
      { property: "og:title", content: "Aymo Digital | Advanced Marketing Agency" },
      { property: "og:description", content: "Clear strategy, powerful creative and measurable digital growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PremiumHome,
});
