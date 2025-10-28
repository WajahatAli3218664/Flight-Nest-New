import { CheckCircle2 } from "lucide-react";
import travelersImage from "@assets/generated_images/Happy_travelers_at_airport_fda3a276.png";

const benefits = [
  "Fast processing with guaranteed turnaround times",
  "Expert guidance from experienced travel consultants",
  "Competitive rates with transparent pricing",
  "24/7 customer support for your peace of mind",
];

export default function WhyChooseSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={travelersImage}
              alt="Happy travelers at airport"
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-travelers"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Flight Nest?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're dedicated to making your travel dreams a reality with unparalleled service and expertise.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`benefit-${index}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}