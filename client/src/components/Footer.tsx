import { Plane } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
  ],
  services: [
    { label: "Visa Assistance", href: "#visa" },
    { label: "Flight Booking", href: "#flights" },
    { label: "Travel Packages", href: "#packages" },
    { label: "Travel Insurance", href: "#insurance" },
  ],
  destinations: [
    { label: "Asia", href: "#asia" },
    { label: "Europe", href: "#europe" },
    { label: "Middle East", href: "#middle-east" },
    { label: "Americas", href: "#americas" },
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "#facebook" },
  { icon: SiInstagram, label: "Instagram", href: "#instagram" },
  { icon: SiX, label: "X", href: "#x" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#linkedin" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/flight.png" alt="Flight Nest Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold">Flight Nest</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your trusted partner for seamless travel experiences worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                    aria-label={social.label}
                    data-testid={`link-social-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`${social.label} clicked`);
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover-elevate px-2 py-1 rounded-md inline-block"
                    data-testid={`link-company-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`${link.label} clicked`);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover-elevate px-2 py-1 rounded-md inline-block"
                    data-testid={`link-service-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`${link.label} clicked`);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover-elevate px-2 py-1 rounded-md inline-block"
                    data-testid={`link-destination-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`${link.label} clicked`);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover-elevate px-2 py-1 rounded-md inline-block"
                    data-testid={`link-support-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`${link.label} clicked`);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Flight Nest. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-primary-foreground/70 hover:text-primary-foreground hover-elevate px-2 py-1 rounded-md"
                data-testid="link-footer-privacy"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Privacy Policy clicked");
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-primary-foreground/70 hover:text-primary-foreground hover-elevate px-2 py-1 rounded-md"
                data-testid="link-footer-terms"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Terms of Service clicked");
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}