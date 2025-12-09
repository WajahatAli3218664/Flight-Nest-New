import { useEffect, useState } from "react";

const airlines = [
  { name: "Emirates", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" },
  { name: "Qatar Airways", logo: "https://crystalpng.com/wp-content/uploads/2023/09/Qatar-airways-animal-logo.png" },
  { name: "Singapore Airlines", logo: "https://upload.wikimedia.org/wikipedia/en/6/6b/Singapore_Airlines_Logo_2.svg" },
  { name: "Etihad", logo: "https://1000logos.net/wp-content/uploads/2020/04/Etihad-Airways-Logo.png" },
  { name: "Turkish Airlines", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Turkish_Airlines_logo_2019_compact.svg" },
  { name: "Lufthansa", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg" },
  { name: "British Airways", logo: "https://upload.wikimedia.org/wikipedia/en/4/42/British_Airways_Logo.svg" },
  { name: "Air France", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Air_France_Logo.svg" },
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
                  <img src={airline.logo} alt={airline.name} className="h-16 w-auto object-contain mb-2" />
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