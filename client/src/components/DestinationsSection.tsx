import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import maldivesImg from "@assets/generated_images/Maldives_overwater_bungalows_destination_2f939fbd.png";
import dubaiImg from "@assets/generated_images/Dubai_skyline_destination_photo_907e43a6.png";
import thailandImg from "@assets/generated_images/Thailand_temple_destination_photo_cca7d2f5.png";
import singaporeImg from "@assets/generated_images/Singapore_cityscape_destination_photo_f1272028.png";
import europeImg from "@assets/generated_images/Europe_destination_photo_29a20b0f.png";

const destinations = [
  { name: "Maldives", price: "1,299", image: maldivesImg, featured: true },
  { name: "Dubai", price: "899", image: dubaiImg, featured: true },
  { name: "Thailand", price: "749", image: thailandImg, featured: false },
  { name: "Singapore", price: "1,099", image: singaporeImg, featured: false },
  { name: "Europe", price: "1,599", image: europeImg, featured: false },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most sought-after travel destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer ${
                destination.featured ? "md:col-span-1" : ""
              }`}
              data-testid={`card-destination-${index}`}
              onClick={() => console.log(`${destination.name} clicked`)}
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-foreground/90 text-sm">
                      From ${destination.price}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            data-testid="button-view-all-destinations"
            onClick={() => console.log("View All Destinations clicked")}
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}