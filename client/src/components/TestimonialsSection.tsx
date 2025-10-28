import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import testimonial1 from "@assets/generated_images/Customer_testimonial_portrait_woman_ccd0ae1b.png";
import testimonial2 from "@assets/generated_images/Customer_testimonial_portrait_man_80fde3f1.png";
import testimonial3 from "@assets/generated_images/Customer_testimonial_portrait_professional_3c92cfe8.png";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    image: testimonial1,
    rating: 5,
    quote: "Flight Nest made my visa process incredibly smooth. Their team was professional and kept me updated every step of the way!",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    image: testimonial2,
    rating: 5,
    quote: "Best travel service I've used. Saved me hours of research and got me the best flight deals for my family vacation.",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    image: testimonial3,
    rating: 5,
    quote: "The travel package to Maldives was beyond expectations. Everything was perfectly organized from start to finish.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}