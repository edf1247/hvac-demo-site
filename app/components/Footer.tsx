import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

const PHONE = "tel:+14015554842";
const serviceAreas = ["Providence", "Cranston", "Pawtucket", "Warwick"];

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-semibold">
              Providence Elite Heating & Cooling
            </h3>
            <p className="mt-2 text-sm text-blue-100">
              Licensed, insured HVAC repair and installation serving Providence
              and Rhode Island since 2004.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Service Areas</h4>
            <ul className="mt-3 space-y-1 text-sm text-blue-100">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-blue-100">
              <a
                href={PHONE}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                (401) 555-HVAC
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                Providence, RI
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-navy-light pt-8 text-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} Providence Elite Heating & Cooling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
