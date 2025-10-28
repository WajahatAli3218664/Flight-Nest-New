// src/pages/Blog.tsx
import { useState } from "react";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import maldivesImg from "@assets/generated_images/Maldives_overwater_bungalows_destination_2f939fbd.png";
import dubaiImg from "@assets/generated_images/Dubai_skyline_destination_photo_907e43a6.png";
import thailandImg from "@assets/generated_images/Thailand_temple_destination_photo_cca7d2f5.png";
import singaporeImg from "@assets/generated_images/Singapore_cityscape_destination_photo_f1272028.png";
import europeImg from "@assets/generated_images/Europe_destination_photo_29a20b0f.png";

// SLUG ADD KIYA HAR POST ME
const blogPosts = [
  {
    slug: "maldives",
    title: "10 Must-Visit Destinations in the Maldives",
    excerpt: "Discover the most beautiful islands and resorts in this tropical paradise. From overwater bungalows to pristine beaches, find your perfect escape.",
    category: "Destinations",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: maldivesImg,
    featured: true,
  },
  {
    slug: "schengen-visa",
    title: "Complete Guide to Schengen Visa Application",
    excerpt: "Everything you need to know about applying for a Schengen visa, from document preparation to interview tips.",
    category: "Visa Tips",
    author: "Michael Chen",
    date: "March 12, 2025",
    readTime: "8 min read",
    image: europeImg,
    featured: false,
  },
  {
    slug: "dubai-best-time",
    title: "Dubai Travel Guide: Best Time to Visit",
    excerpt: "Plan your Dubai trip with our comprehensive guide covering weather, festivals, and the best times for deals.",
    category: "Travel Tips",
    author: "Emma Williams",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: dubaiImg,
    featured: false,
  },
  {
    slug: "thailand-budget",
    title: "Thailand on a Budget: 2-Week Itinerary",
    excerpt: "Explore the best of Thailand without breaking the bank. Our budget-friendly guide includes Bangkok, Phuket, and Chiang Mai.",
    category: "Destinations",
    author: "David Lee",
    date: "March 8, 2025",
    readTime: "7 min read",
    image: thailandImg,
    featured: false,
  },
  {
    slug: "singapore-stopover",
    title: "Singapore Stopover: 48 Hours in the Lion City",
    excerpt: "Make the most of your Singapore layover with this action-packed two-day itinerary covering must-see attractions.",
    category: "Travel Tips",
    author: "Lisa Park",
    date: "March 5, 2025",
    readTime: "5 min read",
    image: singaporeImg,
    featured: false,
  },
];

const categories = ["All", "Destinations", "Visa Tips", "Travel Tips", "Culture"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [, navigate] = useLocation();

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  const goToPost = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Travel Blog"
        description="Get travel inspiration, visa guides, and expert tips for your next adventure. Read about top destinations, budget travel, visa application guides, and travel planning advice."
        keywords="travel blog, travel tips, visa guides, destination guides, travel inspiration, travel advice"
      />
      <Navigation />
      
      <div className="pt-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Travel inspiration, visa guides, and expert tips for your next adventure
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {featuredPost && (
            <Card className="mb-12 overflow-hidden hover-elevate transition-all cursor-pointer"
              onClick={() => goToPost(featuredPost.slug)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-96 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">Featured Post</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button onClick={(e) => { e.stopPropagation(); goToPost(featuredPost.slug); }}>
                    Read Article
                  </Button>
                </div>
              </div>
            </Card>
          )}

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Browse by Category:</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-elevate transition-all cursor-pointer"
                onClick={() => goToPost(post.slug)}
                data-testid={`blog-post-${index}`}
              >
                <div className="h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest travel tips, visa updates, and exclusive deals delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background"
              data-testid="input-newsletter-email"
            />
            <Button data-testid="button-subscribe-newsletter">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}