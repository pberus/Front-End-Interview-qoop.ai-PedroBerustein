import { FC } from "react";
import img from "../assets/undraw_home-cinema_jdm1.svg";
import * as motion from "motion/react-client"

const Hero: FC = () => {
  return (
    <div className="flex flex-col gap-4 m-8">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <h1 className="text-3xl text-[#6c63ff] font-bold w-75">Bringing the Big Screen to Your Home</h1>
        <h2 className="">Access the best streaming content: new releases, classics, and exclusive series, all in one place.</h2>
        <motion.div
          className="flex gap-1 w-100"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <button className="border rounded-lg w-75 text-white bg-[#6c63ff]">Get started</button>
          <button className="border rounded-lg w-75 text-[#6c63ff]">View Pricing</button>
        </motion.div>
      </div>
      <img src={img} alt="home-cinema" />
    </div>
  );
};

export default Hero;
