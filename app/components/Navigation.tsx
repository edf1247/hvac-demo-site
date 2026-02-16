"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const PHONE = "tel:+14015554842";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Providence HVAC"
            width={200}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-accent px-4 py-2.5 font-medium text-white shadow-md hover:bg-amber-dark transition-colors min-h-[44px]"
          >
            <Phone className="h-4 w-4" />
            Call (401) 555-HVAC
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2.5 text-navy hover:bg-gray-100 md:hidden min-h-[44px] min-w-[44px]"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE}
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-amber-accent px-4 py-3 font-medium text-white min-h-[44px]"
            >
              <Phone className="h-4 w-4" />
              Call (401) 555-HVAC
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
