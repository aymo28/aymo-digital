import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-detail";
import { serviceBySlug } from "@/lib/services-data";
export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => { const service = serviceBySlug(params.service); if (!service) throw notFound(); return service; },
  head: ({ loaderData }) => { const title = loaderData ? `${loaderData.title} | Aymo Digital` : "Service not found | Aymo Digital"; const description = loaderData?.summary ?? "Explore Aymo Digital marketing services."; return { meta: [{ title },{ name:"description",content:description },{ property:"og:title",content:title },{ property:"og:description",content:description },{ property:"og:type",content:"website" },{ name:"twitter:card",content:"summary_large_image" }], links:[{rel:"canonical",href:loaderData?`/services/${loaderData.slug}`:"/services"}] }; },
  component: ServiceRoute,
});
function ServiceRoute(){const service=Route.useLoaderData(); return <ServiceDetailPage service={service}/>}
