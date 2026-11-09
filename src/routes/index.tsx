import { createFileRoute } from "@tanstack/react-router";
import { PremiumHome } from "@/components/premium-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AYMO DIGITAL — Get More Customers. Win More Sales. Grow Your Business." },
      {
        name: "description",
        content:
          "AYMO DIGITAL helps businesses attract the right customers, improve their sales and operate more efficiently through smart marketing, custom technology and business automation.",
      },
      { property: "og:title", content: "AYMO DIGITAL — Digital Engineering & Business Growth Company" },
      {
        property: "og:description",
        content:
          "Attract more customers, generate more enquiries, increase sales and improve business operations with practical digital solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PremiumHome,
});
