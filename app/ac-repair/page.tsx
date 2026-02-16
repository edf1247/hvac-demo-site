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
  title: "AC Repair & Installation | Providence Elite HVAC",
  description:
    "Air conditioning repair and installation in Providence, Cranston, Warwick and RI. Same-day service. Licensed and insured.",
  openGraph: {
    title: "AC Repair & Installation | Providence Elite HVAC",
    description: "AC repair and installation in Providence and RI. Same-day service.",
  },
};

export default function ACRepairPage() {
  return (
    <>
      <Navigation />
      <main className="pb-24 md:pb-0">
        <section className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">
              AC Repair & Installation
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Fast repairs and energy-efficient installations for lasting comfort all summer.
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
                Common AC Problems We Fix
              </h2>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  AC not cooling or weak airflow
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Unit not turning on or short cycling
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Strange noises (grinding, hissing, buzzing)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Water leaking or ice on coils
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  Thermostat issues
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-accent" />
                  High energy bills or uneven cooling
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
                    <strong>Call or request a quote.</strong> We get your system type and what is going wrong.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>Same-day or next-day visit.</strong> We diagnose, explain the issue, and give upfront pricing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>Repair or new installation.</strong> We fix it the same day when possible, or schedule installation at your convenience.
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
                <li key={town} className="rounded-lg bg-white px-4 py-2 shadow-sm text-gray-700">
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
              <dt className="font-semibold text-navy">How much does AC repair cost?</dt>
              <dd className="mt-2 text-gray-600">
                Cost depends on the problem and parts. We give upfront pricing after diagnosis. Simple repairs often run in the low hundreds; we will quote major repairs or replacement before starting.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Do you offer emergency AC service?</dt>
              <dd className="mt-2 text-gray-600">
                Yes. For no cooling in extreme heat we offer emergency service. Call us and we will get someone out as soon as possible.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Do you offer financing or maintenance plans?</dt>
              <dd className="mt-2 text-gray-600">
                We offer financing for new AC installations and can discuss maintenance plans. Ask when you call or request a quote.
              </dd>
            </div>
          </dl>
        </section>

        <section id="contact" className="bg-navy py-16 text-white">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold">Ready to Fix Your AC?</h2>
            <p className="mt-4 text-blue-100">Get a free estimate or same-day repair.</p>
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
