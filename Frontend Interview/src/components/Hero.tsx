import { FC } from "react";
import img from "../assets/undraw_home-cinema_jdm1.svg";

const Hero: FC = () => {
  return (
    <div className="flex flex-col gap-4 m-8">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <h1 className="text-2xl font-bold w-75">Bringing the Big Screen to Your Home</h1>
        <h2 className="">Access the best streaming content: new releases, classics, and exclusive series, all in one place.</h2>
        <button className="border w-75">Start now</button>
      </div>
      <img src={img} alt="home-cinema" />
    </div>
  );
};

export default Hero;
