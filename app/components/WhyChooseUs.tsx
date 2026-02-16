import { Check } from "lucide-react";
import Image from "next/image";
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
  "Skilled, experienced technicians",
  "Satisfaction guaranteed",
];

const images = [
  {
    src: "/HVAC-2.jpg",
    alt: "HVAC technician at work",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Why Providence Chooses Us
            </h2>
            <p className="mt-2 text-base text-gray-600">
              We&apos;ve built our reputation one satisfied customer at a time.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl font-bold text-amber-accent sm:text-3xl">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-600">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-navy/5 aspect-[4/3]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
