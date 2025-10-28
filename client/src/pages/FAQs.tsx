import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const faqCategories = {
  "Visa Applications": [
    {
      question: "How long does the visa application process take?",
      answer: "Processing times vary by country. Schengen visas typically take 10-15 business days, while countries like Dubai can be processed in 3-5 days. We'll provide you with specific timelines during your consultation.",
    },
    {
      question: "What documents do I need for a visa application?",
      answer: "Common requirements include a valid passport (at least 6 months validity), completed application form, passport-size photos, travel insurance, proof of accommodation, flight reservations, and proof of financial means. Specific requirements vary by destination.",
    },
    {
      question: "Can you guarantee my visa will be approved?",
      answer: "While we have a 98% success rate, visa approvals are ultimately decided by the respective embassies. We ensure your application is complete and meets all requirements to maximize your chances of approval.",
    },
    {
      question: "What if my visa application is rejected?",
      answer: "In the rare case of rejection, we'll help you understand the reasons and guide you through the reapplication process. Some fees may be non-refundable depending on the embassy's policies.",
    },
  ],
  "Flight Booking": [
    {
      question: "Do you offer flexible flight bookings?",
      answer: "Yes! We offer various fare types including flexible tickets that allow changes and cancellations. Flexibility options vary by airline and route.",
    },
    {
      question: "Can I book flights without a confirmed visa?",
      answer: "Yes, we can provide flight reservations required for visa applications without full payment. Once your visa is approved, you can confirm and pay for your tickets.",
    },
    {
      question: "What is your cancellation policy for flights?",
      answer: "Cancellation policies depend on the airline and fare type. We'll clearly explain all terms before booking. Flexible fares typically allow cancellations with partial refunds.",
    },
  ],
  "Travel Packages": [
    {
      question: "Are your travel packages customizable?",
      answer: "Absolutely! While we offer pre-designed packages, we can customize any aspect including duration, accommodation level, activities, and dining options to match your preferences.",
    },
    {
      question: "What's included in a travel package?",
      answer: "Our packages typically include flights, accommodation, select meals, guided tours, transfers, and visa assistance. Specific inclusions are listed for each package.",
    },
    {
      question: "Do I need travel insurance?",
      answer: "Yes, we strongly recommend travel insurance and it's mandatory for Schengen visas. We can help you obtain comprehensive coverage that meets all requirements.",
    },
  ],
  "Payments": [
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, bank transfers, and online payment platforms. For packages, we also offer installment payment plans.",
    },
    {
      question: "When do I need to make payment?",
      answer: "For visa applications, payment is required upfront. For travel packages, we typically require a 30% deposit at booking with the balance due 30 days before departure.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No! We believe in transparent pricing. All fees including service charges, embassy fees, and taxes are clearly itemized in your quote.",
    },
  ],
  "General": [
    {
      question: "Do you offer 24/7 customer support?",
      answer: "Yes! Our dedicated support team is available 24/7 to assist you with any questions or emergencies during your travel planning and journey.",
    },
    {
      question: "Can you help with last-minute travel arrangements?",
      answer: "Yes, we can assist with urgent travel needs. However, visa processing times may limit how quickly we can arrange travel to certain destinations.",
    },
    {
      question: "How do I track my visa application status?",
      answer: "Once your application is submitted, we'll provide you with a tracking reference. You can check status updates through our portal or contact our support team anytime.",
    },
  ],
};

export default function FAQs() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="FAQs"
        description="Find answers to frequently asked questions about visa applications, flight bookings, travel packages, and payments. Get help with your travel planning questions 24/7."
        keywords="visa faq, travel questions, flight booking help, visa application questions, travel support"
      />
      <Navigation />
      
      <div className="pt-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-4">
            <HelpCircle className="w-12 h-12" />
            <h1 className="text-4xl md:text-6xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Find answers to common questions about our services
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-12">
          {Object.entries(faqCategories).map(([category, faqs], categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-foreground mb-6">{category}</h2>
              <Card className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger 
                        className="text-left"
                        data-testid={`faq-question-${categoryIndex}-${index}`}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent 
                        className="text-muted-foreground"
                        data-testid={`faq-answer-${categoryIndex}-${index}`}
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is here to help with any additional questions you may have
          </p>
          <Button size="lg" className="rounded-full" data-testid="button-contact-support">
            Contact Support
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}