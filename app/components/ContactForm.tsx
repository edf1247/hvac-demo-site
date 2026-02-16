"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const serviceTypes = [
  "Heating Repair",
  "AC Repair",
  "New Installation",
  "Emergency Service",
  "Maintenance",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
                Thanks! We&apos;ll be in touch within 30 minutes during business
                hours.
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
                We&apos;ll respond within 30 minutes during business hours.
              </p>
            </form>
          )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
