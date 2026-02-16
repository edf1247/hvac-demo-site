"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const serviceTypes = [
  "Heating Repair",
  "AC Repair",
  "Heat Pumps",
  "New Installation",
  "Emergency Service",
  "Maintenance",
  "Other",
];

const preferredTimes = [
  { value: "morning", label: "Morning (8am – 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm – 5pm)" },
  { value: "evening", label: "Evening (5pm – 8pm)" },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [wasEmergency, setWasEmergency] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const emergency = (form.elements.namedItem("emergency") as HTMLInputElement)?.checked ?? false;
    setWasEmergency(emergency);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <AnimatedSection>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl text-center">
            Get Your Free Quote
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Fill out the form and we&apos;ll get back to you quickly.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <p className="font-semibold text-green-800">
                Thanks! Your request has been received.
              </p>
              <p className="mt-2 text-green-700">
                {wasEmergency
                  ? "We'll call you within 15 minutes. Our team is standing by for emergency service."
                  : "We'll call you within 30 minutes during business hours (Mon–Sat 8am–6pm)."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-accent focus:ring-amber-accent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-accent focus:ring-amber-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-accent focus:ring-amber-accent"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Street address"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-accent focus:ring-amber-accent"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                    ZIP code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    placeholder="02903"
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-accent focus:ring-amber-accent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-accent focus:ring-amber-accent"
                >
                  <option value="">Select...</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred time
                </label>
                <div className="space-y-2">
                  {preferredTimes.map(({ value, label }) => (
                    <label key={value} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredTime"
                        value={value}
                        className="rounded-full border-gray-300 text-amber-accent focus:ring-amber-accent"
                      />
                      <span className="text-gray-700">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="emergency"
                  name="emergency"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-amber-accent focus:ring-amber-accent"
                />
                <label htmlFor="emergency" className="text-sm font-medium text-gray-700">
                  Is this an emergency? (no heat / no AC / safety concern)
                </label>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-accent focus:ring-amber-accent"
                  placeholder="Describe your issue or request..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-accent px-6 py-4 text-lg font-semibold text-white shadow-md hover:bg-amber-dark transition-colors min-h-[48px]"
              >
                Get Your Free Quote
              </button>
              <p className="text-center text-sm text-gray-500">
                We&apos;ll respond within 30 minutes during business hours. Emergencies: we&apos;ll call within 15 minutes.
              </p>
            </form>
          )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
