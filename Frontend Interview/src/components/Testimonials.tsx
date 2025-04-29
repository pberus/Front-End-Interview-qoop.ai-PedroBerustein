import { FC } from "react";
import { FaStar } from "react-icons/fa";
import useTestimonials from "../hooks/useTestimonials";

interface CardProps {
  name: string;
  body: string;
}

const Card: FC<CardProps> = ({ name, body }) => {
  return (
    <div className="bg-[#6c63ff] rounded-lg p-4 flex flex-col gap-2 justify-around text-white h-[200px]">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="line-clamp-2 text-ellipsis overflow-hidden">"{body}"</p>
      <div className="text-xl flex items-center gap-2">
        <FaStar />
        {(Math.random() * 10).toFixed(1)}</div>
    </div>
  );
};

const Testimonials: FC = () => {
  const { testimonials, loading } = useTestimonials(6);
  return (
    <div className="flex flex-col gap-8 p-8 text-[#6c63ff] justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl font-bold">What Our Users Say</h2>
        <p className="text-lg text-[#6c63ff]">
          Don't just take our word for it. <br /> Here's what our community of streamers
          loves about our platform. <br />Real experiences from real users.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {loading ? (
          <div className="flex justify-center items-center h-32 text-lg">Loading...</div>
        ) : (
          testimonials.map((testimonial) => (
            <Card key={testimonial.id} name={testimonial.name} body={testimonial.body} />
          ))
        )}
      </div>
    </div>
  );
};

export default Testimonials;