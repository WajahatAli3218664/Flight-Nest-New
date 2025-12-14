import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      console.log('Submitting contact form:', data);
      const response = await apiRequest("POST", "/api/contact", data);
      console.log('Response:', response);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us"
        description="Get in touch with Flight Nest for visa services, flight bookings, and travel packages. 24/7 customer support available. Call us, email, or visit our office for expert travel assistance."
        keywords="contact flight nest, travel support, visa help, customer service, travel agency contact"
      />
      <Navigation />
      
      <div className="pt-20 bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
              Ready to start your journey? Get in touch with our travel experts for personalized assistance
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <Card className="mb-8 border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/50">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-yellow-400 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                  <CardDescription className="text-blue-100">
                    Fill out the form and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-subject">
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="visa">Visa Application</SelectItem>
                                <SelectItem value="flights">Flight Booking</SelectItem>
                                <SelectItem value="packages">Travel Packages</SelectItem>
                                <SelectItem value="support">Customer Support</SelectItem>
                                <SelectItem value="other">Other Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                rows={6}
                                placeholder="How can we help you?"
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-blue-600 to-yellow-400 hover:from-blue-700 hover:to-yellow-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" 
                        data-testid="button-submit"
                        disabled={contactMutation.isPending}
                      >
                        {contactMutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                          <p className="text-muted-foreground">
                            3 Maryam Close<br />
                            Rainham, England<br />
                            RM13 9PE<br />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                          <p className="text-muted-foreground">
                            Main: +44 7380 406155<br />
                            WhatsApp: +44 7380 406155
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Email</h3>
                          <p className="text-muted-foreground">
                            General: info@flightnest.com<br />
                            Visas: visa@flightnest.com<br />
                            Support: support@flightnest.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 8:00 PM<br />
                            Saturday: 10:00 AM - 6:00 PM<br />
                            Sunday: Closed<br />
                            <span className="text-primary font-medium">24/7 Emergency Support Available</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Visit Our Office</h3>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <p className="text-blue-800 font-semibold text-lg">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                  <CardContent className="pt-6 bg-gradient-to-r from-blue-50 to-yellow-50">
                    <p className="text-gray-700 font-medium">
                      Our office is located in the heart of downtown, easily accessible by public transport. Free parking is available for visitors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}