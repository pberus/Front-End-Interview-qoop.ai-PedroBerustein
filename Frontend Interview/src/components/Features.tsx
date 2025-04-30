import { FC, ReactElement } from "react";
import { FaMagic, FaDownload, FaUserFriends, FaBroadcastTower } from "react-icons/fa";
import * as motion from "motion/react-client"

interface CardProps {
  title: string;
  description: string;
  icon: ReactElement;
}

const Card: FC<CardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white rounded-lg p-4 flex flex-col gap-2 text-[#6c63ff]"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </motion.div>
  );
};

const Features: FC = () => {
  const features = [
    { title: "Live Channels", description: "Stream live TV anytime, anywhere.", icon: <FaBroadcastTower /> },
    { title: "Smart Recommendations", description: "Discover shows tailored to your taste.", icon: <FaMagic /> },
    { title: "Offline Viewing", description: "Watch your favorites without internet.", icon: <FaDownload /> },
    { title: "Multiple Profiles", description: "Create profiles for the whole family.", icon: <FaUserFriends /> },
  ];

  return (
    <div className="bg-[#6c63ff] flex flex-col gap-8 p-8 text-white justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl font-bold">Features</h2>
        <p className="text-lg text-gray-200">
          Everything you need to enjoy the best entertainment
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
