import { useState } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertVisaApplicationSchema, type InsertVisaApplication } from "@shared/schema";

const countries = {
  asia: [
    { name: "China", processingTime: "5-7 days", fee: "$140", visaType: "Tourist/Business" },
    { name: "India", processingTime: "3-5 days", fee: "$80", visaType: "e-Visa" },
    { name: "Japan", processingTime: "5-7 days", fee: "$30", visaType: "Tourist" },
    { name: "South Korea", processingTime: "3-5 days", fee: "$40", visaType: "Tourist" },
    { name: "Vietnam", processingTime: "3-5 days", fee: "$25", visaType: "e-Visa" },
  ],
  middleEast: [
    { name: "UAE (Dubai)", processingTime: "3-5 days", fee: "$100", visaType: "Tourist" },
    { name: "Saudi Arabia", processingTime: "5-7 days", fee: "$120", visaType: "Tourist/Umrah" },
    { name: "Qatar", processingTime: "3-5 days", fee: "$85", visaType: "Tourist" },
    { name: "Turkey", processingTime: "1-3 days", fee: "$50", visaType: "e-Visa" },
  ],
  americas: [
    { name: "USA", processingTime: "10-15 days", fee: "$160", visaType: "B1/B2" },
    { name: "Canada", processingTime: "15-20 days", fee: "$100", visaType: "Tourist/Visit" },
    { name: "Brazil", processingTime: "10-15 days", fee: "$80", visaType: "Tourist" },
    { name: "Mexico", processingTime: "5-7 days", fee: "$36", visaType: "Tourist" },
  ],
  africa: [
    { name: "Egypt", processingTime: "3-5 days", fee: "$25", visaType: "e-Visa" },
    { name: "Kenya", processingTime: "3-5 days", fee: "$50", visaType: "e-Visa" },
    { name: "South Africa", processingTime: "10-15 days", fee: "$75", visaType: "Tourist" },
    { name: "Morocco", processingTime: "No visa required", fee: "Free", visaType: "Visa-free for 90 days" },
  ],
};

export default function OtherCountries() {
  const { toast } = useToast();
  
  const form = useForm<InsertVisaApplication>({
    resolver: zodResolver(insertVisaApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      travelDate: "",
      purpose: "",
      visaType: "",
      message: "",
    },
  });

  const visaMutation = useMutation({
    mutationFn: async (data: InsertVisaApplication) => {
      return await apiRequest("/api/visa-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Our team will review your application and contact you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertVisaApplication) => {
    visaMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Worldwide Visa Services"
        description="Visa services for destinations worldwide including USA, Canada, Dubai, Turkey, China, India, and more. Fast processing with expert guidance. Apply for your international visa today."
        keywords="visa services, usa visa, dubai visa, canada visa, turkey visa, china visa, india visa, tourist visa, business visa"
      />
      <Navigation />
      
      <div className="pt-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Worldwide Visa Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Expert visa assistance for destinations across the globe
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Browse Countries by Region</h2>
            <Tabs defaultValue="asia" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="asia">Asia</TabsTrigger>
                <TabsTrigger value="middleEast">Middle East</TabsTrigger>
                <TabsTrigger value="americas">Americas</TabsTrigger>
                <TabsTrigger value="africa">Africa</TabsTrigger>
              </TabsList>

              {Object.entries(countries).map(([region, countryList]) => (
                <TabsContent key={region} value={region} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {countryList.map((country, index) => (
                      <Card key={index} className="hover-elevate transition-all">
                        <CardHeader>
                          <CardTitle className="text-xl">{country.name}</CardTitle>
                          <CardDescription>{country.visaType}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Processing:</span>
                            <span className="text-sm font-semibold">{country.processingTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Fee:</span>
                            <span className="text-sm font-semibold text-primary">{country.fee}</span>
                          </div>
                          <Button 
                            className="w-full mt-4" 
                            variant="outline"
                            onClick={() => {
                              form.setValue('country', country.name);
                              document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            data-testid={`button-apply-${index}`}
                          >
                            Apply Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div id="application-form">
            <h2 className="text-3xl font-bold text-foreground mb-8">Visa Application Form</h2>
            <Card>
              <CardHeader>
                <CardTitle>Apply for Your Visa</CardTitle>
                <CardDescription>
                  Complete the form and our visa specialists will guide you through the process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input {...field} data-testid="input-full-name" />
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
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input {...field} type="tel" data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Destination Country *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Enter country name" data-testid="input-country" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="travelDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Intended Travel Date *</FormLabel>
                            <FormControl>
                              <Input {...field} type="date" data-testid="input-travel-date" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="visaType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Visa Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-visa-type">
                                  <SelectValue placeholder="Select visa type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="tourist">Tourist</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="work">Work</SelectItem>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="family">Family Visit</SelectItem>
                                <SelectItem value="transit">Transit</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={4}
                              placeholder="Tell us about your travel plans and any special requirements..."
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
                      className="w-full md:w-auto" 
                      data-testid="button-submit-application"
                      disabled={visaMutation.isPending}
                    >
                      {visaMutation.isPending ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}