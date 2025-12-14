// src/components/Navigation.tsx
'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location === "/";
  const isActiveLink = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img 
              src="/flight.png" 
              alt="Flight Nest Logo" 
              className="h-12 w-auto drop-shadow-md" 
            />
            <span 
              className={`text-2xl font-bold ${
                isScrolled || !isHomePage ? "text-foreground" : "text-white"
              } drop-shadow-md`}
            >
              Flight Nest
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium text-lg transition-colors hover:text-yellow-300 px-3 py-2 rounded-md drop-shadow-md ${
                isActiveLink("/") 
                  ? "text-yellow-400 font-bold" 
                  : isScrolled || !isHomePage 
                    ? "text-foreground" 
                    : "text-white"
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`font-medium text-lg transition-colors hover:text-yellow-300 px-3 py-2 rounded-md flex items-center gap-1 drop-shadow-md ${
                    isActiveLink("/schengen") || isActiveLink("/other-countries")
                      ? "text-yellow-400 font-bold"
                      : isScrolled || !isHomePage
                      ? "text-foreground"
                      : "text-white"
                  }`}
                >
                  Visa Services
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-md">
                <DropdownMenuItem asChild>
                  <Link href="/schengen" className="cursor-pointer text-foreground hover:text-primary">
                    Schengen Countries
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/other-countries" className="cursor-pointer text-foreground hover:text-primary">
                    Other Countries
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {["/trips", "/blog", "/faqs", "/contact"].map((path) => {
              const label = path === "/trips" ? "Trips" : path === "/blog" ? "Blog" : path === "/faqs" ? "FAQs" : "Contact";
              return (
                <Link
                  key={path}
                  href={path}
                  className={`font-medium text-lg transition-colors hover:text-yellow-300 px-3 py-2 rounded-md drop-shadow-md ${
                    isActiveLink(path)
                      ? "text-yellow-400 font-bold"
                      : isScrolled || !isHomePage
                      ? "text-foreground"
                      : "text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <Link href="/contact">
              <Button
                variant="default"
                className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold shadow-lg hover:scale-105 transition"
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`lg:hidden ${
              isScrolled || !isHomePage ? "text-foreground" : "text-white"
            } drop-shadow-md`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border py-6">
            <div className="flex flex-col gap-4 px-4">
              <Link
                href="/"
                className={`font-medium text-lg ${isActiveLink("/") ? "text-primary" : "text-foreground"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/schengen"
                className={`font-medium text-lg ${isActiveLink("/schengen") ? "text-primary" : "text-foreground"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schengen Countries
              </Link>
              <Link
                href="/other-countries"
                className={`font-medium text-lg ${isActiveLink("/other-countries") ? "text-primary" : "text-foreground"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Other Countries
              </Link>
              {["/trips", "/blog", "/faqs", "/contact"].map((path) => {
                const label = path === "/trips" ? "Trips" : path === "/blog" ? "Blog" : path === "/faqs" ? "FAQs" : "Contact";
                return (
                  <Link
                    key={path}
                    href={path}
                    className={`font-medium text-lg ${isActiveLink(path) ? "text-primary" : "text-foreground"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link href="/contact" className="mt-2">
                <Button
                  variant="default"
                  className="w-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}