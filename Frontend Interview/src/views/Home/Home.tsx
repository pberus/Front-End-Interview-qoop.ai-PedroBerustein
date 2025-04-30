//This view is the main page of the application. It imports various components and uses them to create a complete page layout. The page includes sections for a hero banner, features, testimonials, pricing, contact information, and a footer. The component also handles smooth scrolling to different sections when a custom event is triggered.
import { FC, useEffect, useRef, RefObject } from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import Pricing from "../../components/Pricing";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Variants from "../../components/common/Variants";

type Section = "hero" | "features" | "testimonials" | "pricing" | "contact";

const Home: FC = () => {
  const sectionRefs: Record<Section, RefObject<HTMLElement | null>> = {
    hero: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    pricing: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const customEvent = event as CustomEvent<Section>;
      const section = customEvent.detail;

      const ref = sectionRefs[section];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scrollToSection", handleScroll);
    return () => window.removeEventListener("scrollToSection", handleScroll);
  }, []);

  return (
    <div>
      <Variants />
      <section ref={sectionRefs.hero} id="hero"><Hero /></section>
      <section ref={sectionRefs.features} id="features"><Features /></section>
      <section ref={sectionRefs.testimonials} id="testimonials"><Testimonials /></section>
      <section ref={sectionRefs.pricing} id="pricing"><Pricing /></section>
      <section ref={sectionRefs.contact} id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default Home;
