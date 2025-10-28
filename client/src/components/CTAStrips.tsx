import { Button } from "@/components/ui/button";
import { Plane, FileCheck, Phone } from "lucide-react";

const ctaItems = [
  {
    icon: Plane,
    title: "Book Your Dream Trip",
    description: "Exclusive packages to exotic destinations",
    buttonText: "Explore Packages",
    bgColor: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: FileCheck,
    title: "Fast Visa Processing",
    description: "Get your visa approved in as little as 3 days",
    buttonText: "Apply Now",
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: Phone,
    title: "24/7 Expert Support",
    description: "Our travel consultants are always here to help",
    buttonText: "Contact Us",
    bgColor: "bg-card",
    textColor: "text-card-foreground",
  },
];

export default function CTAStrips() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctaItems.map((cta, index) => {
            const Icon = cta.icon;
            return (
              <div
                key={index}
                className={`${cta.bgColor} ${cta.textColor} rounded-2xl p-8 hover-elevate active-elevate-2 transition-all`}
                data-testid={`cta-strip-${index}`}
              >
                <Icon className="w-12 h-12 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">{cta.title}</h3>
                <p className="mb-6 opacity-80">{cta.description}</p>
                <Button
                  variant={index === 0 ? "secondary" : "default"}
                  className="rounded-full"
                  data-testid={`button-cta-${index}`}
                  onClick={() => console.log(`${cta.buttonText} clicked`)}
                >
                  {cta.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}