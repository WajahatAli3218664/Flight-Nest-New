import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

const passports = [
  { country: "USA", color: "from-blue-900 to-blue-700" },
  { country: "UK", color: "from-red-900 to-red-700" },
  { country: "Germany", color: "from-red-800 to-red-600" },
  { country: "Japan", color: "from-red-900 to-red-800" },
  { country: "Singapore", color: "from-red-800 to-red-700" },
  { country: "Canada", color: "from-blue-800 to-blue-600" },
  { country: "Australia", color: "from-blue-900 to-blue-800" },
  { country: "France", color: "from-red-900 to-red-800" },
];

export default function PassportShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % passports.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Your Gateway to the World
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We process visas for travelers from around the globe
          </p>
        </div>

        <div className="relative h-96 flex items-center justify-center">
          <div className="relative w-full max-w-5xl h-full">
            {passports.map((passport, index) => {
              const isActive = index === activeIndex;
              const offset = (index - activeIndex + passports.length) % passports.length;
              const isVisible = offset <= 3;

              return (
                <div
                  key={index}
                  className={`absolute top-1/2 left-1/2 transition-all duration-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform: `
                      translate(-50%, -50%)
                      translateX(${offset * 120 - 180}px)
                      translateY(${Math.abs(offset - 1.5) * 20}px)
                      scale(${isActive ? 1.1 : 0.85 - Math.abs(offset - 1.5) * 0.1})
                      rotateY(${(offset - 1.5) * 15}deg)
                    `,
                    zIndex: passports.length - offset,
                  }}
                  data-testid={`passport-${index}`}
                >
                  <div
                    className={`w-48 h-64 rounded-lg bg-gradient-to-br ${passport.color} shadow-2xl p-6 flex flex-col justify-between border-2 border-white/10`}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Globe className="w-12 h-12 text-white/90" />
                    </div>
                    <div className="text-center">
                      <div className="text-white/60 text-xs uppercase mb-2 font-semibold">
                        Passport
                      </div>
                      <div className="text-white text-xl font-bold">
                        {passport.country}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="h-8 bg-white/10 rounded mb-2" />
                      <div className="h-2 bg-white/10 rounded mb-1" />
                      <div className="h-2 bg-white/10 rounded w-2/3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {passports.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-primary w-8" : "bg-border"
              }`}
              data-testid={`passport-indicator-${index}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-semibold text-foreground mb-2">
            Trusted by 10,000+ Travelers
          </p>
          <p className="text-muted-foreground">
            Processing visas for destinations worldwide with a 98% success rate
          </p>
        </div>
      </div>
    </section>
  );
}