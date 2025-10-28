import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe email:", email);
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section id="cta" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive deals, travel tips, and destination inspiration
        </p>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background"
            required
            data-testid="input-newsletter-email"
          />
          <Button
            type="submit"
            variant="secondary"
            className="rounded-full px-8 whitespace-nowrap"
            data-testid="button-subscribe"
          >
            Subscribe
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
            data-testid="button-book-now"
            onClick={() => console.log("Book Now clicked")}
          >
            Book Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            data-testid="button-contact-us"
            onClick={() => console.log("Contact Us clicked")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}