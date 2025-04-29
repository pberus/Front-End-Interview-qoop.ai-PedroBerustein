import { FC, ReactElement } from "react";
import { FaMagic, FaDownload, FaUserFriends, FaBroadcastTower } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  icon: ReactElement;
}

const Card: FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-2 text-[#6c63ff]">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const Features: FC = () => {
  return (
    <div className="bg-[#6c63ff] flex flex-col gap-8 p-8 text-white justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl font-bold">Features</h2>
        <p className="text-lg text-gray-200">
          Everything you need to enjoy the best entertainment
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <Card title="Live Channels" description="Stream live TV anytime, anywhere." icon={<FaBroadcastTower />} />
        <Card title="Smart Recommendations" description="Discover shows tailored to your taste." icon={<FaMagic />} />
        <Card title="Offline Viewing" description="Watch your favorites without internet." icon={<FaDownload />} />
        <Card title="Multiple Profiles" description="Create profiles for the whole family." icon={<FaUserFriends />} />
      </div>
    </div>
  );
};

export default Features;
