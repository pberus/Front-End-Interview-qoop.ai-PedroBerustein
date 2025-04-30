import { FC } from "react";
import { FaStar } from "react-icons/fa";
import useTestimonials from "../hooks/useTestimonials";
import ElementScrollLinked from "../components/common/Element scroll-linked";
import LoadingCircleSpinner from "../components/common/LoadingCircleSpinner";

const TestimonialCard: FC<{ name: string; body: string }> = ({ name, body }) => (
  <div className="bg-[#6c63ff] rounded-lg p-4 flex flex-col gap-2 justify-around text-white h-[190px] w-[200px] flex-shrink-0">
    <h3 className="text-lg font-bold max-h-[33%] text-ellipsis overflow-hidden">{name}</h3>
    <p className="line-clamp-2 text-ellipsis overflow-hidden">"{body}"</p>
    <div className="text-xl flex items-center gap-2">
      <FaStar />
      {(Math.random() * 10).toFixed(1)}
    </div>
  </div>
);

const Testimonials: FC = () => {
  const { testimonials, loading } = useTestimonials(6);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-32 text-lg">
        <LoadingCircleSpinner />
        <p className="text-[#6c63ff]">Loading testimonials...</p>
      </div>
    );
  }

  const testimonialElements = testimonials.map((testimonial) => (
    <TestimonialCard
      key={testimonial.id}
      name={testimonial.name}
      body={testimonial.body}
    />
  ));

  return (
    <div className="flex flex-col gap-8 p-8 text-[#6c63ff] justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl font-bold">What Our Users Say</h2>
        <p className="text-lg text-[#6c63ff]">
          Don't just take our word for it. <br /> Here's what our community of
          streamers loves about our platform.
        </p>
      </div>
      <ElementScrollLinked elements={testimonialElements} />
    </div>
  );
};

export default Testimonials;