import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Providence Elite Heating & Cooling | HVAC Repair & Installation",
  description:
    "Providence's trusted HVAC repair and installation. Same-day service. Licensed, insured. Serving Providence, Cranston, Pawtucket, Warwick. Call (401) 555-HVAC.",
  openGraph: {
    title: "Providence Elite Heating & Cooling | HVAC Repair & Installation",
    description:
      "Providence's trusted HVAC repair and installation. Same-day service. Licensed, insured. Call (401) 555-HVAC.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Providence Elite Heating & Cooling | HVAC Repair & Installation",
    description:
      "Providence's trusted HVAC repair and installation. Same-day service. Licensed, insured.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
