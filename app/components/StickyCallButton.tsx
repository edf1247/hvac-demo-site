"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const PHONE = "tel:+14015554842";

export default function StickyCallButton() {
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
      className={`fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={PHONE}
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-amber-accent font-semibold text-white shadow-lg hover:bg-amber-dark transition-colors"
      >
        <Phone className="h-5 w-5" />
        Call Now — (401) 555-HVAC
      </a>
    </div>
  );
}
