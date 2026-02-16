import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import EmergencyBanner from "./components/EmergencyBanner";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import StickyCallButton from "./components/StickyCallButton";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pb-24 md:pb-0">
        <Hero />
        <EmergencyBanner />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <ContactForm />
        <Footer />
      </main>
      <StickyCallButton />
    </>
  );
}
