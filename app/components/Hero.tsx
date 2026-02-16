import Link from "next/link";
import { Phone, Shield, Star, Clock, Award } from "lucide-react";

const PHONE = "tel:+14015554842";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Clock, label: "24/7 Emergency" },
  { icon: Award, label: "20+ Years" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-navy from-60% to-navy-dark text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Providence&apos;s Trusted HVAC Repair & Installation
          </h1>
          <p className="mt-6 text-lg text-blue-100 sm:text-xl">
            Same-day service. 20+ years serving Rhode Island. When your heat or
            AC fails, we&apos;re the team Providence families call.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-amber-accent px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-amber-dark transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href={PHONE}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-white/60 bg-transparent px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (401) 555-HVAC
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-8 sm:gap-10">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-blue-100"
              >
                <Icon className="h-6 w-6 text-amber-accent" aria-hidden />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
