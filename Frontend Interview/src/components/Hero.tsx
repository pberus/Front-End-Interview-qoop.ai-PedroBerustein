//This component is a Hero section for a web application that promotes home cinema streaming services. It includes a title, subtitle, a background illustration and two buttons for getting started and viewing pricing. The component uses the `motion` library to animate the appearance of the buttons and the image of a home cinema setup.
import { FC } from "react";
import img from "../assets/undraw_home-cinema_jdm1.svg";
import * as motion from "motion/react-client"

const Hero: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 m-8 lg:h-[80vh] items-center w-auto items-center">
      <div className="flex flex-col gap-3 lg:gap-5 items-center justify-center text-center w-[100%] lg:w-[50%]">
        <h1 className="text-3xl lg:text-5xl text-[#6c63ff] font-bold w-75 lg:w-[80%] mt-5 p-2">Bringing the Big Screen to Your Home</h1>
        <h2 className="text-lg lg:text-xl w-[80%] font-semibold">Access the BEST streaming content: new RELEASES, CLASSICS, and EXCLUSIVE SERIES, all in ONE PLACE.</h2>
        <motion.div
          className="flex gap-1 w-[100%] justify-center items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <button className="p-2 lg:p-3 lg:text-xl border rounded-lg w-75 text-white bg-[#6c63ff] cursor-pointer hover:opacity-80 active:bg-[#4b44c0]">Get started</button>
          <button className="p-2 lg:p-3 lg:text-xl border rounded-lg w-75 text-[#6c63ff] cursor-pointer hover:opacity-80 active:bg-[#e0e0ff]">View Pricing</button>
        </motion.div>
      </div>
      <img src={img} alt="home-cinema" className="sm:h-[400px] lg:w-[50%]" />
    </div>
  );
};

export default Hero;
