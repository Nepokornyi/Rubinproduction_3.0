import { services } from "@/content/services";
import { ServiceShowcase } from "@/components/services/ServiceShowcase";

export function Services() {
  return <div className="services-list">{services.map((service) => <ServiceShowcase key={service.id} service={service} />)}</div>;
}
