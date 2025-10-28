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
import Image from 'next/image';

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
        
        {/* HD BACKGROUND WITH MULTIPLE FORMATS FOR BROWSER COMPATIBILITY */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/brook-hd.webp"
            alt="HD Brook - Flight Nest"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        {/* ENHANCED DARK OVERLAY FOR BETTER TEXT READABILITY */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        {/* ANIMATED PLANE */}
        <AnimatedHero />

        {/* CONTENT - BUTTONS REMOVED */}
        <div className="relative z-20 text-center max-w-5xl mx-auto w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight leading-tight">
            Your Journey Starts Here
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-2xl mx-auto font-light px-2">
            Discover seamless travel experiences with expert visa assistance, flight booking, and curated travel packages
          </p>

          {/* BUTTONS REMOVED AS REQUESTED */}
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

      {/* REST OF SECTIONS */}
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
