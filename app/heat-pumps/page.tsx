import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Phone, Check, ArrowRight } from "lucide-react";

const PHONE = "tel:+14015554842";
const SERVICE_AREAS = [
  "Providence",
  "Cranston",
  "Pawtucket",
  "Warwick",
  "East Providence",
  "North Providence",
  "Johnston",
  "Smithfield",
];

export const metadata: Metadata = {
  title: "Heat Pumps | Installation & Repair | Providence Elite HVAC",
  description:
    "Heat pump installation, repair, and maintenance in Providence, Cranston, Warwick & RI. Year-round heating and cooling.",
  openGraph: {
    title: "Heat Pumps | Providence Elite HVAC",
    description:
      "Heat pump installation and repair in Providence & RI. Year-round comfort.",
  },
};

export default function HeatPumpsPage() {
  return (
    <>
      <Navigation />
      <main className="pb-24 md:pb-0">
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              Heat Pumps
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Installation, repair, and maintenance for year-round heating and
              cooling in one system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-amber-accent px-6 py-3 font-semibold text-white hover:bg-amber-dark"
              >
                Get Free Estimate
              </Link>
              <a
                href={PHONE}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg border-2 border-white/60 px-6 py-3 font-semibold hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call (401) 555-HVAC
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                Common Heat Pump Issues We Fix
              </h2>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Not heating or cooling properly
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Unit not turning on or short cycling
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Strange noises (grinding, clicking, squealing)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Ice on outdoor unit or coils
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Thermostat or defrost problems
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  High bills or uneven comfort
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                How It Works
              </h2>
              <ol className="mt-6 space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    1
                  </span>
                  <span>
                    <strong>Call or request a quote.</strong> We discuss your
                    home, current system, and goals (repair vs. new install).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>Assessment and quote.</strong> We size and recommend
                    the right heat pump and give clear pricing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>Installation or repair.</strong> We install on a
                    scheduled day or complete repairs same-day when possible.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-navy text-center">
              We Serve These Rhode Island Areas
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Providence, Cranston, Pawtucket, Warwick, and surrounding towns.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-4">
              {SERVICE_AREAS.map((town) => (
                <li
                  key={town}
                  className="rounded-lg bg-white px-4 py-2 shadow-sm text-gray-700"
                >
                  {town}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy text-center">
            Frequently Asked Questions
          </h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="font-semibold text-navy">
                How much does heat pump installation cost?
              </dt>
              <dd className="mt-2 text-gray-600">
                Installation cost depends on size, brand, and any duct or
                electrical work. We provide a detailed quote after a site
                visit. Financing and rebates may be available—ask when you
                call.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">
                Do you offer emergency heat pump service?
              </dt>
              <dd className="mt-2 text-gray-600">
                Yes. If you have no heat in winter or a critical failure, we
                offer 24/7 emergency service. Call us and we’ll prioritize
                your situation.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">
                Do you offer financing or maintenance plans?
              </dt>
              <dd className="mt-2 text-gray-600">
                We offer financing for new heat pump installations and can
                discuss maintenance plans to keep your system running
                efficiently. Ask when you call or request a quote.
              </dd>
            </div>
          </dl>
        </section>

        <section id="contact" className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold">
              Ready for a New Heat Pump or Repair?
            </h2>
            <p className="mt-4 text-blue-100">
              Get a free estimate. We’re here to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-amber-accent px-8 py-3 font-semibold text-white hover:bg-amber-dark"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={PHONE}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3 font-semibold hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                (401) 555-HVAC
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
