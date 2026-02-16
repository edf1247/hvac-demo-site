import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "5,000+", label: "Homes Served" },
  { value: "4.9", label: "Star Rating" },
];

const features = [
  "Licensed, bonded & insured",
  "Same-day & next-day service",
  "Upfront pricing, no hidden fees",
  "NATE-certified technicians",
  "Satisfaction guaranteed",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Why Providence Chooses Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;ve built our reputation one satisfied customer at a time.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-3xl font-bold text-amber-accent sm:text-4xl">
                    {value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-gray-600">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-10 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-navy/5 min-h-[280px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="mx-auto h-24 w-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-4xl text-gray-400">
                HVAC
              </div>
              <p className="mt-4 text-sm">Professional imagery placeholder</p>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
