import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar, FileText } from "lucide-react";
import heroImage from "@assets/generated_images/Tropical_beach_hero_background_a6af0b18.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="mb-4">
          <span className="inline-block bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Trusted by 10,000+ travelers
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
          Your Journey Starts Here
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Discover seamless travel experiences with expert visa assistance, flight booking, and curated travel packages
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            variant="default"
            className="rounded-full px-8 text-base"
            data-testid="button-start-journey"
            onClick={() => console.log("Start Your Journey clicked")}
          >
            Start Your Journey
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-base bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
            data-testid="button-explore-services"
            onClick={() => console.log("Explore Services clicked")}
          >
            Explore Services
          </Button>
        </div>

        <Card className="max-w-5xl mx-auto bg-background/95 backdrop-blur-md p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Destination"
                className="pl-10"
                data-testid="input-destination"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="date"
                placeholder="Departure Date"
                className="pl-10"
                data-testid="input-departure-date"
              />
            </div>
            <Select>
              <SelectTrigger data-testid="select-visa-type">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <SelectValue placeholder="Visa Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tourist">Tourist Visa</SelectItem>
                <SelectItem value="business">Business Visa</SelectItem>
                <SelectItem value="student">Student Visa</SelectItem>
                <SelectItem value="work">Work Visa</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="rounded-md"
              data-testid="button-search"
              onClick={() => console.log("Search clicked")}
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}