import { FC } from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
