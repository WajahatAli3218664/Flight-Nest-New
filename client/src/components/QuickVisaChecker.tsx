import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

const countries = [
  { value: "france", label: "France", visaRequired: true, processingDays: "10-15" },
  { value: "germany", label: "Germany", visaRequired: true, processingDays: "10-15" },
  { value: "spain", label: "Spain", visaRequired: true, processingDays: "10-15" },
  { value: "dubai", label: "Dubai (UAE)", visaRequired: true, processingDays: "3-5" },
  { value: "turkey", label: "Turkey", visaRequired: true, processingDays: "5-7" },
  { value: "thailand", label: "Thailand", visaRequired: false, processingDays: "N/A" },
  { value: "singapore", label: "Singapore", visaRequired: false, processingDays: "N/A" },
  { value: "maldives", label: "Maldives", visaRequired: false, processingDays: "N/A" },
];

export default function QuickVisaChecker() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [result, setResult] = useState<typeof countries[0] | null>(null);

  const handleCheck = () => {
    const country = countries.find(c => c.value === selectedCountry);
    if (country) {
      setResult(country);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quick Visa Checker
          </h2>
          <p className="text-lg text-muted-foreground">
            Check if you need a visa for your destination
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Select Your Destination</CardTitle>
            <CardDescription>
              Find out visa requirements in seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="flex-1" data-testid="select-country">
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={handleCheck}
                disabled={!selectedCountry}
                data-testid="button-check-visa"
              >
                Check Requirements
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">{result.label}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {result.visaRequired ? (
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                    <span className="text-foreground">
                      {result.visaRequired ? "Visa Required" : "No Visa Required"}
                    </span>
                  </div>

                  {result.visaRequired && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Processing Time: {result.processingDays} business days
                      </span>
                    </div>
                  )}
                </div>

                {result.visaRequired && (
                  <Button className="mt-6 w-full" data-testid="button-apply-visa">
                    Apply for Visa
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}