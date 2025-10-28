import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Refund Policy"
        description="Read our comprehensive refund policy for visa applications, flight bookings, and travel packages. Understand your rights and our obligations regarding cancellations and refunds."
        keywords="refund policy, cancellation policy, visa refund, flight cancellation, travel insurance"
      />
      <Navigation />
      
      <div className="pt-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Last updated: March 2025
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground">
                  At Flight Nest, we strive to provide exceptional service. Please read our refund policy carefully to understand your rights and our obligations.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Visa Application Services</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.1 Service Fees</h3>
                    <p className="text-muted-foreground">
                      Our service fees are non-refundable once the visa application process has been initiated. This includes document verification, form completion, and submission to the respective embassy or consulate.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.2 Embassy Fees</h3>
                    <p className="text-muted-foreground">
                      Embassy and consular fees are non-refundable under any circumstances, as these are paid directly to government authorities and are beyond our control.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.3 Cancellation Before Submission</h3>
                    <p className="text-muted-foreground">
                      If you cancel your visa application before we submit it to the embassy, you may be eligible for a partial refund of our service fees (50%), minus any administrative costs incurred. Embassy fees are non-refundable.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.4 Visa Rejection</h3>
                    <p className="text-muted-foreground">
                      Visa approval is at the sole discretion of the embassy or consulate. In case of rejection, service fees and embassy fees are non-refundable. We will assist you in understanding the rejection reasons and guide you through the reapplication process if desired.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Flight Bookings</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.1 Cancellation Policy</h3>
                    <p className="text-muted-foreground">
                      Flight cancellations are subject to the terms and conditions of the airline. Refund eligibility depends on the fare type:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Refundable tickets: Full or partial refund as per airline policy</li>
                      <li>Non-refundable tickets: No refund; may be eligible for credit towards future travel</li>
                      <li>Flexible tickets: Cancellation with airline fees applied</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.2 Service Charges</h3>
                    <p className="text-muted-foreground">
                      Our booking service charge is refundable if the cancellation is made within 24 hours of booking and the departure date is at least 7 days away.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.3 Flight Changes</h3>
                    <p className="text-muted-foreground">
                      Date or route changes are subject to availability and airline change fees. Our service fee for processing changes is $50 per ticket.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Travel Packages</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.1 Cancellation Timeline</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>More than 60 days before departure: 75% refund of package cost</li>
                      <li>30-60 days before departure: 50% refund of package cost</li>
                      <li>15-30 days before departure: 25% refund of package cost</li>
                      <li>Less than 15 days before departure: No refund</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.2 Non-Refundable Components</h3>
                    <p className="text-muted-foreground">
                      Certain package components (cruise bookings, special event tickets, non-refundable hotel bookings) may have stricter cancellation policies and will be specified in your package details.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.3 Package Modifications</h3>
                    <p className="text-muted-foreground">
                      Modifications to travel packages are subject to availability and may incur additional costs. A service fee of $100 applies to package modifications.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Refund Processing</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.1 Timeline</h3>
                    <p className="text-muted-foreground">
                      Approved refunds will be processed within 14-21 business days from the date of approval. The time for funds to appear in your account depends on your payment provider.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.2 Method</h3>
                    <p className="text-muted-foreground">
                      Refunds will be issued to the original payment method used for booking. In some cases, alternative arrangements may be made with your consent.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.3 Currency</h3>
                    <p className="text-muted-foreground">
                      Refunds will be processed in the original transaction currency. Exchange rate fluctuations may affect the final amount received.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Exceptions and Special Circumstances</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.1 Force Majeure</h3>
                    <p className="text-muted-foreground">
                      In cases of natural disasters, pandemics, political unrest, or other events beyond our control, we will work with suppliers to secure the best possible outcome for you. Refunds in such cases depend on supplier policies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.2 Medical Emergencies</h3>
                    <p className="text-muted-foreground">
                      Cancellations due to medical emergencies (supported by medical documentation) will be reviewed on a case-by-case basis. We recommend purchasing travel insurance to cover such situations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.3 Travel Insurance</h3>
                    <p className="text-muted-foreground">
                      We strongly recommend purchasing comprehensive travel insurance to protect your investment. Many circumstances not covered by our refund policy may be covered by insurance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    If you have questions about our refund policy or wish to request a refund, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Email:</strong> refunds@flightnest.com</p>
                    <p><strong className="text-foreground">Phone:</strong> +1 (800) 123-4567</p>
                    <p><strong className="text-foreground">Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}