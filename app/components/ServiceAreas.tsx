import { MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const areas = [
  { town: "Providence", line: "Full HVAC service across the city and surrounding neighborhoods." },
  { town: "Cranston", line: "Heating, AC, and heat pump repair and installation." },
  { town: "Pawtucket", line: "Same-day and emergency service available." },
  { town: "Warwick", line: "Residential and light commercial HVAC." },
  { town: "East Providence", line: "Furnace, AC, and heat pump experts." },
  { town: "North Providence", line: "Trusted local HVAC repairs and installs." },
  { town: "Johnston", line: "We serve Johnston and nearby communities." },
  { town: "Smithfield", line: "Full-service HVAC throughout Smithfield." },
];

const MAP_LINK = "https://www.google.com/maps/search/Providence+RI";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl text-center">
            Service Areas
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
            We provide heating, cooling, and HVAC repair and installation throughout the Providence metro and Rhode Island.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ul className="space-y-4">
              {areas.map(({ town, line }) => (
                <li key={town} className="flex gap-4 rounded-lg border border-gray-100 bg-cream/30 p-4">
                  <MapPin className="h-5 w-5 shrink-0 text-amber-accent mt-0.5" />
                  <div>
                    <span className="font-semibold text-navy">{town}</span>
                    <p className="mt-1 text-sm text-gray-600">{line}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 min-h-[280px] flex flex-col relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188728.83643294922!2d-71.54287875!3d41.82387795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4354d6e23f1c68ff%3A0x8a4d55b5934b42e1!2sProvidence%2C%20RI!5e0!3m2!1sen!2sus!4v1739721600000!5m2!1sen!2sus"
                className="w-full h-full min-h-[280px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Providence, RI service area map"
                aria-label="Google Maps showing Providence, RI"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
