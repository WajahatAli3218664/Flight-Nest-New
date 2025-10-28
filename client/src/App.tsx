// src/App.tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";
import SchengenCountries from "@/pages/SchengenCountries";
import OtherCountries from "@/pages/OtherCountries";
import Trips from "@/pages/Trips";
import FAQs from "@/pages/FAQs";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";  // YE ADD KIYA
import RefundPolicy from "@/pages/RefundPolicy";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/schengen" component={SchengenCountries} />
      <Route path="/other-countries" component={OtherCountries} />
      <Route path="/trips" component={Trips} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />  // YE ADD KIYA
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;