import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "How do you price repairs and installations?",
    a: "We provide upfront pricing after we diagnose the issue. There are no hidden fees—you'll know the cost before we start work. For new installations we give a detailed written quote. Simple repairs often run in the low hundreds; we'll always explain your options before any work begins.",
  },
  {
    q: "Do you offer emergency or after-hours service?",
    a: "Yes. We offer 24/7 emergency service for no heat in cold weather and no cooling in extreme heat, especially when health or safety is a concern. Call us anytime; we'll get a technician out as soon as possible. We prioritize emergencies so you're not left without heat or AC.",
  },
  {
    q: "Do you offer financing or maintenance plans?",
    a: "We offer financing options for new HVAC installations so you can spread the cost over time. We can also discuss maintenance plans to keep your system running efficiently and catch small issues before they become big repairs. Ask about both when you call or request a quote.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Quick answers about pricing, emergencies, and service.
          </p>
          <dl className="mt-10 space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-semibold text-navy">{q}</dt>
                <dd className="mt-2 text-gray-600">{a}</dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </section>
  );
}
