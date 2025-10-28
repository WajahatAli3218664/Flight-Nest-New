import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import maldivesImg from "@assets/generated_images/Maldives_overwater_bungalows_destination_2f939fbd.png";
import dubaiImg from "@assets/generated_images/Dubai_skyline_destination_photo_907e43a6.png";
import thailandImg from "@assets/generated_images/Thailand_temple_destination_photo_cca7d2f5.png";
import singaporeImg from "@assets/generated_images/Singapore_cityscape_destination_photo_f1272028.png";
import europeImg from "@assets/generated_images/Europe_destination_photo_29a20b0f.png";

const packages = [
  {
    title: "Maldives Paradise Escape",
    destination: "Maldives",
    duration: "7 Days / 6 Nights",
    price: "$2,499",
    rating: 4.9,
    reviews: 324,
    image: maldivesImg,
    includes: ["Flights", "Resort Stay", "Meals", "Water Sports", "Visa Assistance"],
    bestFor: "Honeymoon",
  },
  {
    title: "Dubai Luxury Experience",
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "$1,799",
    rating: 4.8,
    reviews: 512,
    image: dubaiImg,
    includes: ["Flights", "5-Star Hotel", "Desert Safari", "City Tours", "Visa Processing"],
    bestFor: "Family",
  },
  {
    title: "Thailand Adventure Tour",
    destination: "Bangkok & Phuket",
    duration: "8 Days / 7 Nights",
    price: "$1,499",
    rating: 4.7,
    reviews: 428,
    image: thailandImg,
    includes: ["Flights", "Hotels", "Island Hopping", "Cultural Tours", "Visa Assistance"],
    bestFor: "Adventure",
  },
  {
    title: "Singapore City Break",
    destination: "Singapore",
    duration: "4 Days / 3 Nights",
    price: "$1,299",
    rating: 4.8,
    reviews: 267,
    image: singaporeImg,
    includes: ["Flights", "Hotel", "City Tours", "Universal Studios", "Visa Support"],
    bestFor: "Family",
  },
  {
    title: "European Grand Tour",
    destination: "Paris, Rome & Barcelona",
    duration: "12 Days / 11 Nights",
    price: "$3,999",
    rating: 4.9,
    reviews: 189,
    image: europeImg,
    includes: ["Flights", "Hotels", "Guided Tours", "Museums", "Schengen Visa"],
    bestFor: "Cultural",
  },
];

export default function Trips() {
  const [filter, setFilter] = useState("all");

  const filteredPackages = filter === "all" 
    ? packages 
    : packages.filter(pkg => pkg.bestFor.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen">
      <SEO 
        title="Travel Packages"
        description="Discover amazing travel packages to Maldives, Dubai, Thailand, Singapore, and Europe. All-inclusive trips with flights, hotels, tours, and visa assistance. Book your dream vacation today."
        keywords="travel packages, holiday packages, maldives vacation, dubai tours, thailand packages, europe tours, all-inclusive trips"
      />
      <Navigation />
      
      <div className="pt-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Packages</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Carefully curated travel experiences combining flights, accommodation, and unforgettable activities
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Filter by Category:</h3>
            <div className="flex flex-wrap gap-3">
              {["all", "honeymoon", "family", "adventure", "cultural"].map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="capitalize"
                  data-testid={`filter-${category}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover-elevate transition-all" data-testid={`package-${index}`}>
                <div className="relative h-56">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    {pkg.bestFor}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {pkg.destination}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-semibold">{pkg.rating}</span>
                      <span className="text-sm text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Package Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <Button 
                      data-testid={`button-book-${index}`}
                      onClick={() => console.log(`Book ${pkg.title} clicked`)}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No packages found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us create a custom travel package tailored to your preferences
          </p>
          <Button size="lg" className="rounded-full" data-testid="button-custom-package">
            Request Custom Package
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}