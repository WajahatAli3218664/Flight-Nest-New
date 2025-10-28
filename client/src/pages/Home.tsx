// src/pages/Home.tsx
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import AnimatedHero from "@/components/AnimatedHero";
import FlightBookingForm from "@/components/FlightBookingForm";
import PartnerAirlinesSlider from "@/components/PartnerAirlinesSlider";
import QuickVisaChecker from "@/components/QuickVisaChecker";
import DestinationsSection from "@/components/DestinationsSection";
import CTAStrips from "@/components/CTAStrips";
import PassportShowcase from "@/components/PassportShowcase";
import InstagramGallery from "@/components/InstagramGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Flight Nest - Visa & Flight Booking"
        description="Your trusted partner for visa services and flight bookings. Get expert assistance for Schengen visas, international travel packages, and hassle-free flight reservations with 24/7 support."
      />

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <Navigation />
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* BEACH BACKGROUND */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/images/sunset.webp')` }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* ANIMATED PLANE */}
        <AnimatedHero />

        {/* CONTENT */}
        <div className="relative z-20 text-center max-w-5xl mx-auto w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight leading-tight">
            Your Journey Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto font-light px-2">
            Discover seamless travel experiences with expert visa assistance, flight booking, and curated travel packages
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:scale-105 transition shadow-xl text-base sm:text-lg min-w-[180px]">
              Start Your Journey
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition text-base sm:text-lg min-w-[180px]">
              Explore Services
            </button>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* FORM - RESPONSIVE */}
      <section className="relative z-40 -mt-24 sm:-mt-32 px-4 mb-16 sm:mb-20 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <FlightBookingForm />
        </div>
      </section>

      {/* REST */}
      <PartnerAirlinesSlider />
      <QuickVisaChecker />
      <DestinationsSection />
      <CTAStrips />
      <PassportShowcase />
      <InstagramGallery />
      <CTASection />
      <Footer />
    </div>
  );
}
