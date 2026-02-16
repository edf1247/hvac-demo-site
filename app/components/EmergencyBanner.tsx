"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const PHONE = "tel:+14015554842";

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a
        href={PHONE}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 px-4 py-3 text-white shadow-lg hover:from-red-700 hover:to-orange-700 transition-colors min-h-[48px]"
      >
        <Phone className="h-5 w-5 shrink-0" />
        <span className="font-semibold">
          24/7 Emergency Service Available — Call Now: (401) 555-HVAC
        </span>
      </a>
    </div>
  );
}
