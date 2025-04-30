import { FC } from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import Pricing from "../../components/Pricing";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
