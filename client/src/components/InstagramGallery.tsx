import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import maldivesImg from "@assets/generated_images/Maldives_overwater_bungalows_destination_2f939fbd.png";
import dubaiImg from "@assets/generated_images/Dubai_skyline_destination_photo_907e43a6.png";
import thailandImg from "@assets/generated_images/Thailand_temple_destination_photo_cca7d2f5.png";
import singaporeImg from "@assets/generated_images/Singapore_cityscape_destination_photo_f1272028.png";
import europeImg from "@assets/generated_images/Europe_destination_photo_29a20b0f.png";
import travelersImg from "@assets/generated_images/Happy_travelers_at_airport_fda3a276.png";

const instagramPosts = [
  { image: maldivesImg, likes: "1.2k", caption: "Paradise found in the Maldives" },
  { image: dubaiImg, likes: "2.1k", caption: "Dubai skyline never gets old" },
  { image: thailandImg, likes: "1.8k", caption: "Temple hopping in Thailand" },
  { image: singaporeImg, likes: "1.5k", caption: "Modern marvel - Singapore" },
  { image: europeImg, likes: "2.4k", caption: "European charm at its finest" },
  { image: travelersImg, likes: "3.2k", caption: "Another happy journey begins" },
];

export default function InstagramGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by travel stories from our community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover-elevate active-elevate-2 transition-all"
              data-testid={`instagram-post-${index}`}
              onClick={() => console.log(`Instagram post ${index} clicked`)}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium mb-1">{post.caption}</p>
                  <p className="text-xs text-white/80">❤️ {post.likes} likes</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full gap-2"
            data-testid="button-follow-instagram"
            onClick={() => console.log("Follow on Instagram clicked")}
          >
            <Instagram className="w-5 h-5" />
            Follow @FlightNest on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}