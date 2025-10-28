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
import { CheckCircle2, Clock, FileText } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertVisaApplicationSchema, type InsertVisaApplication } from "@shared/schema";

const schengenCountries = [
  { name: "Austria", processingTime: "10-15 days", fee: "$80" },
  { name: "Belgium", processingTime: "10-15 days", fee: "$80" },
  { name: "Czech Republic", processingTime: "10-15 days", fee: "$80" },
  { name: "Denmark", processingTime: "10-15 days", fee: "$80" },
  { name: "Estonia", processingTime: "10-15 days", fee: "$80" },
  { name: "Finland", processingTime: "10-15 days", fee: "$80" },
  { name: "France", processingTime: "10-15 days", fee: "$80" },
  { name: "Germany", processingTime: "10-15 days", fee: "$80" },
  { name: "Greece", processingTime: "10-15 days", fee: "$80" },
  { name: "Hungary", processingTime: "10-15 days", fee: "$80" },
  { name: "Iceland", processingTime: "10-15 days", fee: "$80" },
  { name: "Italy", processingTime: "10-15 days", fee: "$80" },
  { name: "Latvia", processingTime: "10-15 days", fee: "$80" },
  { name: "Liechtenstein", processingTime: "10-15 days", fee: "$80" },
  { name: "Lithuania", processingTime: "10-15 days", fee: "$80" },
  { name: "Luxembourg", processingTime: "10-15 days", fee: "$80" },
  { name: "Malta", processingTime: "10-15 days", fee: "$80" },
  { name: "Netherlands", processingTime: "10-15 days", fee: "$80" },
  { name: "Norway", processingTime: "10-15 days", fee: "$80" },
  { name: "Poland", processingTime: "10-15 days", fee: "$80" },
  { name: "Portugal", processingTime: "10-15 days", fee: "$80" },
  { name: "Slovakia", processingTime: "10-15 days", fee: "$80" },
  { name: "Slovenia", processingTime: "10-15 days", fee: "$80" },
  { name: "Spain", processingTime: "10-15 days", fee: "$80" },
  { name: "Sweden", processingTime: "10-15 days", fee: "$80" },
  { name: "Switzerland", processingTime: "10-15 days", fee: "$80" },
];

const requirements = [
  "Valid passport (at least 6 months validity)",
  "Completed visa application form",
  "Two recent passport-size photographs",
  "Travel insurance (minimum €30,000 coverage)",
  "Proof of accommodation",
  "Round-trip flight reservation",
  "Proof of financial means",
  "Cover letter explaining purpose of visit",
];

export default function SchengenCountries() {
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
        description: "We'll contact you within 24 hours to discuss your visa application.",
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
        title="Schengen Visa Services"
        description="Apply for Schengen visas to travel across 26 European countries. Expert visa assistance with 98% approval rate. Fast processing in 10-15 business days. Get your Europe visa today."
        keywords="schengen visa, europe visa, france visa, germany visa, spain visa, italy visa, schengen countries, visa application"
      />
      <Navigation />
      
      <div className="pt-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Schengen Visa Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Travel freely across 26 European countries with a single Schengen visa
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Processing Time</CardTitle>
                <CardDescription>10-15 business days on average</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Standard document checklist provided</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>High Success Rate</CardTitle>
                <CardDescription>98% approval rate for complete applications</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Schengen Countries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {schengenCountries.map((country, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">{country.name}</h3>
                    <p className="text-sm text-muted-foreground">{country.processingTime}</p>
                    <p className="text-sm text-primary font-semibold mt-1">{country.fee}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Visa Requirements</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Apply for Schengen Visa</h2>
            <Card>
              <CardHeader>
                <CardTitle>Start Your Application</CardTitle>
                <CardDescription>
                  Fill out the form below and our visa experts will contact you
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-country">
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {schengenCountries.map((country) => (
                                  <SelectItem key={country.name} value={country.name}>
                                    {country.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
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
                        name="purpose"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Purpose of Visit</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-purpose">
                                  <SelectValue placeholder="Select purpose" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="tourism">Tourism</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="family">Family Visit</SelectItem>
                                <SelectItem value="education">Education</SelectItem>
                                <SelectItem value="medical">Medical</SelectItem>
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
                              placeholder="Tell us about your travel plans..."
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