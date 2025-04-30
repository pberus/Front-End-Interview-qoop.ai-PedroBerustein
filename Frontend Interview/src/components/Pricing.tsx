//This component is a pricing card component that displays different subscription plans. It uses the `motion` library for animations and includes a recommended plan highlight. The component is styled with Tailwind CSS classes and includes a button for subscribing to the selected plan.
import { FC } from "react";
import { TiTick } from "react-icons/ti";
import * as motion from "motion/react-client"

interface CardProps {
  title: string;
  price: number;
  description: string;
  content: string[];
  recommended: boolean;
}

const Card: FC<CardProps> = ({ title, price, description, content, recommended }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
      className={`bg-white rounded-lg border-1 border-[#4841b5] p-4 flex flex-col gap-2 justify-between text-[#6c63ff] h-[420px] lg:h-[450px] transition-all ${recommended ? "border-3 border-[#2922a1] relative" : ""
        }`}
    >
      {recommended && (
        <span className="text-sm text-white absolute top-0 right-0 border-l-2 border-b-2 p-1 rounded-bl-md bg-[#4841b5] font-bold">
          Recommended
        </span>
      )}
      <div>
        <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>
        <p className="text-4xl lg:text-5xl font-bold">
          ${price}
          <span className="text-lg lg:text-xl font-normal">/month</span>
        </p>
        <p className="text-gray-500 sm:text-lg">{description}</p>
        <ul className="list-none pt-3">
          {content.map((item, index) => (
            <li key={index} className="flex items-baseline text-[#56535c] text-lg sm:text-2xl lg:text-xl">
              <TiTick color="#6c63ff" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="border rounded bg-[#6c63ff] text-white p-2 lg:p-3 lg:text-xl cursor-pointer hover:opacity-80 active:bg-[#4b44c0]">
        Suscribe
      </button>
    </motion.div>
  );
};


const Pricing: FC = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: 5.99,
      description: "Perfect for individual use",
      content: ["720p HD", "Watch on one device at a time", "Unlimited movies and TV shows", "Cancel anytime"],
      recommended: false,
    },
    {
      title: "Standard",
      price: 9.99,
      description: "Best for families",
      content: ["1080p Full HD", "Watch on 4 devices at the same time", "Unlimited movies and TV shows", "Cancel anytime", "No Ads", "Downloads available"],
      recommended: true,
    },
    {
      title: "Premium",
      price: 15.99,
      description: "For the ultimate experience",
      content: ["4K Ultra HD and HDR", "Unlimited devices", "Unlimited movies and TV shows", "Cancel anytime", "No Ads", "Downloads available", "Spatial audio"],
      recommended: false,
    },
  ];

  return (
    <div className="bg-[#6c63ff] flex flex-col gap-8 p-8 text-white justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold">Pricing</h2>
        <p className="text-lg lg:text-2xl text-gray-100 w-75">
          Choose the plan that best suits you and your family
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 w-[90%]">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            content={plan.content}
            recommended={plan.recommended}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
