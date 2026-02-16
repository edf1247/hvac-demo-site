import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Maria S.",
    location: "Providence",
    rating: 5,
    quote:
      "They came same day when our furnace died in January. Professional, fair pricing, and the house was warm by evening. Highly recommend.",
  },
  {
    name: "James T.",
    location: "Cranston",
    rating: 5,
    quote:
      "Had our entire AC system replaced. The crew was on time, cleaned up after themselves, and explained everything clearly. Best experience we've had with a contractor.",
  },
  {
    name: "Linda K.",
    location: "Pawtucket",
    rating: 5,
    quote:
      "Emergency call at 10pm and they were here within an hour. Fixed the issue and didn't overcharge. This is our go-to HVAC company now.",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < stars ? "fill-amber-accent text-amber-accent" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real reviews from real Providence-area homeowners.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map(({ name, location, rating, quote }) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-100 bg-cream/30 p-6 shadow-sm"
            >
              <StarRating stars={rating} />
              <p className="mt-4 text-gray-700">&ldquo;{quote}&rdquo;</p>
              <p className="mt-4 font-semibold text-navy">{name}</p>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">
          <a
            href="#"
            className="text-amber-dark font-medium hover:text-amber-accent underline"
          >
            See all 200+ reviews on Google
          </a>
        </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
