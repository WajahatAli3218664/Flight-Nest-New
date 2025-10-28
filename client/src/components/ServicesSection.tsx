import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plane, Package } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Visa Processing",
    description: "Fast and reliable visa assistance for all destinations. Expert guidance through every step of the process.",
    link: "#visa",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Access to the best flight deals worldwide with competitive pricing and flexible options.",
    link: "#flights",
  },
  {
    icon: Package,
    title: "Travel Packages",
    description: "Curated travel experiences combining flights, accommodation, and activities for unforgettable journeys.",
    link: "#packages",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a seamless travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all cursor-pointer"
                data-testid={`card-service-${index}`}
                onClick={() => console.log(`${service.title} clicked`)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <button
                    className="text-primary font-medium hover-elevate px-3 py-1 rounded-md"
                    data-testid={`link-learn-more-${index}`}
                  >
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}