import { FC } from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import Pricing from "../../components/Pricing";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Home;
