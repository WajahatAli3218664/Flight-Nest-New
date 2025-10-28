// src/pages/BlogPost.tsx
'use client';

import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import maldivesImg from "@assets/generated_images/Maldives_overwater_bungalows_destination_2f939fbd.png";
import dubaiImg from "@assets/generated_images/Dubai_skyline_destination_photo_907e43a6.png";
import thailandImg from "@assets/generated_images/Thailand_temple_destination_photo_cca7d2f5.png";
import singaporeImg from "@assets/generated_images/Singapore_cityscape_destination_photo_f1272028.png";
import europeImg from "@assets/generated_images/Europe_destination_photo_29a20b0f.png";

const blogPosts = [
  {
    slug: "maldives",
    title: "10 Must-Visit Destinations in the Maldives",
    category: "Destinations",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: maldivesImg,
    content: `
      <h2>Why Maldives Should Be Your Next Destination</h2>
      <p>The Maldives is a tropical paradise made up of over 1,000 coral islands. Known for its crystal-clear waters, overwater bungalows, and vibrant marine life, it's the perfect destination for honeymooners, families, and adventure seekers alike.</p>

      <h3>1. Overwater Bungalows</h3>
      <p>Stay in luxury villas built on stilts over turquoise lagoons. Wake up to the sound of waves and step directly into the ocean from your private deck.</p>

      <h3>2. World-Class Diving & Snorkeling</h3>
      <p>Explore coral reefs teeming with colorful fish, manta rays, and even whale sharks. The Maldives is one of the best diving destinations in the world.</p>

      <h3>3. Private Island Resorts</h3>
      <p>Many resorts occupy their own private island, offering complete privacy and personalized service.</p>

      <h3>4. Spa & Wellness</h3>
      <p>Indulge in overwater spa treatments, yoga sessions at sunrise, and wellness retreats focused on rejuvenation.</p>

      <p><strong>Pro Tip:</strong> Visit during the dry season (November to April) for the best weather and underwater visibility.</p>
    `,
  },
  {
    slug: "schengen-visa",
    title: "Complete Guide to Schengen Visa Application",
    category: "Visa Tips",
    author: "Michael Chen",
    date: "March 12, 2025",
    readTime: "8 min read",
    image: europeImg,
    content: `
      <h2>How to Apply for a Schengen Visa: Step-by-Step</h2>
      <p>The Schengen visa allows you to travel freely across 27 European countries. Here's everything you need to know to apply successfully.</p>

      <h3>Step 1: Determine Your Visa Type</h3>
      <ul>
        <li><strong>Tourism</strong> - For vacation and sightseeing</li>
        <li><strong>Business</strong> - For meetings and conferences</li>
        <li><strong>Visiting Family/Friends</strong> - With invitation letter</li>
      </ul>

      <h3>Step 2: Required Documents</h3>
      <ul>
        <li>Valid passport (6+ months validity)</li>
        <li>2 recent passport photos</li>
        <li>Travel insurance (€30,000 coverage)</li>
        <li>Flight + hotel bookings</li>
        <li>Bank statements (last 3 months)</li>
        <li>Employment letter or business registration</li>
      </ul>

      <h3>Step 3: Book Appointment</h3>
      <p>Apply through VFS Global or the embassy of your main destination. Book 3-6 weeks in advance.</p>

      <p><strong>Success Rate Tip:</strong> Show strong ties to your home country (job, property, family) to prove you'll return.</p>
    `,
  },
  {
    slug: "dubai-best-time",
    title: "Dubai Travel Guide: Best Time to Visit",
    category: "Travel Tips",
    author: "Emma Williams",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: dubaiImg,
    content: `
      <h2>When to Visit Dubai: Weather, Events & Deals</h2>
      <p>Dubai offers year-round sunshine, but timing your trip can make a big difference in comfort and cost.</p>

      <h3>Best Time: November to March</h3>
      <p>Temperatures: 20-30°C. Perfect for outdoor activities, beach days, and desert safaris.</p>

      <h3>Budget Season: June to August</h3>
      <p>Hot (40+°C) but hotel rates drop up to 70%. Great for indoor attractions like malls and museums.</p>

      <h3>Major Events:</h3>
      <ul>
        <li><strong>Dubai Shopping Festival</strong> (Dec-Jan)</li>
        <li><strong>Dubai Food Festival</strong> (Feb-Mar)</li>
        <li><strong>Ramadan</strong> (dates vary) - Unique cultural experience</li>
      </ul>

      <p><strong>Pro Tip:</strong> Book hotels early during winter — prices surge and rooms sell out fast!</p>
    `,
  },
  {
    slug: "thailand-budget",
    title: "Thailand on a Budget: 2-Week Itinerary",
    category: "Destinations",
    author: "David Lee",
    date: "March 8, 2025",
    readTime: "7 min read",
    image: thailandImg,
    content: `
      <h2>2 Weeks in Thailand for Under $800</h2>
      <p>Yes, it's possible! Here's a complete budget itinerary covering Bangkok, Phuket, and Chiang Mai.</p>

      <h3>Day 1-3: Bangkok</h3>
      <p>Stay in Khao San Road area. Visit Grand Palace, Wat Arun, and floating markets. Street food: $2-3 per meal.</p>

      <h3>Day 4-7: Phuket</h3>
      <p>Fly with AirAsia ($40). Stay in Patong or Kata. Island hopping tour: $25. Beaches are free!</p>

      <h3>Day 8-12: Chiang Mai</h3>
      <p>Night train from Bangkok: $20. Visit Doi Suthep, elephant sanctuary (ethical), and night bazaar.</p>

      <h3>Day 13-14: Return via Bangkok</h3>
      <p>Shop at Chatuchak weekend market. Fly home.</p>

      <p><strong>Total Cost Breakdown:</strong> Flights $400, Accommodation $150, Food $100, Transport $80, Activities $70 = <strong>$800</strong></p>
    `,
  },
  {
    slug: "singapore-stopover",
    title: "Singapore Stopover: 48 Hours in the Lion City",
    category: "Travel Tips",
    author: "Lisa Park",
    date: "March 5, 2025",
    readTime: "5 min read",
    image: singaporeImg,
    content: `
      <h2>Maximize Your 48-Hour Layover in Singapore</h2>
      <p>Don't waste your stopover! Here's the perfect 2-day itinerary.</p>

      <h3>Day 1: City Highlights</h3>
      <ul>
        <li>Morning: Gardens by the Bay (Cloud Forest + Supertrees)</li>
        <li>Afternoon: Marina Bay Sands + Merlion Park</li>
        <li>Evening: Chinatown street food + light show</li>
      </ul>

      <h3>Day 2: Culture & Nature</h3>
      <ul>
        <li>Morning: Little India + Sri Veeramakaliamman Temple</li>
        <li>Afternoon: Sentosa Island (optional) or Botanic Gardens</li>
        <li>Evening: Clarke Quay nightlife</li>
      </ul>

      <p><strong>Transit Tip:</strong> Singapore offers free city tours for transit passengers with 5.5+ hour layovers!</p>
    `,
  },
];

export default function BlogPost() {
  const [location] = useLocation();
  const slug = location.split('/').pop();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>

          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
}