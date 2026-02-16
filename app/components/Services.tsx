import {
  Flame,
  Snowflake,
  Wind,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Flame,
    title: "Heating Repair & Installation",
    description:
      "Furnaces, heat pumps, and boilers. We keep Providence homes warm all winter.",
    href: "/heating-repair",
  },
  {
    icon: Snowflake,
    title: "AC Repair & Installation",
    description:
      "Fast repairs and energy-efficient installations for lasting comfort.",
    href: "/ac-repair",
  },
  {
    icon: Wind,
    title: "Heat Pumps",
    description:
      "Installation, repair, and maintenance of heat pumps for year-round comfort.",
    href: "/heat-pumps",
  },
  {
    icon: AlertCircle,
    title: "Emergency Services",
    description:
      "24/7 availability when you need us most. Same-day and emergency service.",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Services We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Full-service HVAC for homes and businesses across Providence and
            Rhode Island.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, href }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-cream/50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-amber-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-gray-600">{description}</p>
              <Link
                href={href}
                className="mt-4 inline-flex items-center gap-1 text-amber-dark font-medium hover:text-amber-accent transition-colors"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
