import { useEffect, useState } from "react";

const airlines = [
  { name: "Emirates", logo: "✈️" },
  { name: "Qatar Airways", logo: "✈️" },
  { name: "Singapore Airlines", logo: "✈️" },
  { name: "Etihad", logo: "✈️" },
  { name: "Turkish Airlines", logo: "✈️" },
  { name: "Lufthansa", logo: "✈️" },
  { name: "British Airways", logo: "✈️" },
  { name: "Air France", logo: "✈️" },
];

export default function PartnerAirlinesSlider() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (airlines.length * 150));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h3 className="text-center text-xl font-semibold text-muted-foreground mb-8">
          Our Partner Airlines
        </h3>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-12 items-center"
              style={{
                transform: `translateX(${position}px)`,
                width: `${airlines.length * 300}px`,
              }}
            >
              {[...airlines, ...airlines, ...airlines].map((airline, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center flex-shrink-0 w-32"
                  data-testid={`airline-${index}`}
                >
                  <div className="text-5xl mb-2">{airline.logo}</div>
                  <span className="text-sm text-muted-foreground font-medium text-center">
                    {airline.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}