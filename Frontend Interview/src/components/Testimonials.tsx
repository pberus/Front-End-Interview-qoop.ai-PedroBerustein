import { FC } from "react";
import { FaStar } from "react-icons/fa";
import useTestimonials from "../hooks/useTestimonials";
import ElementScrollLinked from "../components/common/Element scroll-linked";
import LoadingThreeDotsJumping from "./common/LoadingJumpingDots";

const TestimonialCard: FC<{ name: string; body: string }> = ({ name, body }) => (
  <div className="bg-[#6c63ff] rounded-lg p-4 flex flex-col gap-2 justify-around text-white h-[99%] w-[200px] sm:w-[250px] flex-shrink-0">
    <h3 className="text-lg lg:text-xl font-bold max-h-[33%] line-clamp-2 text-ellipsis overflow-hidden">{name}</h3>
    <p className="lg:text-lg line-clamp-2 lg:line-clamp-3 text-ellipsis overflow-hidden">"{body}"</p>
    <div className="text-xl flex items-center gap-2">
      <FaStar />
      {(Math.random() * 10).toFixed(1)}
    </div>
  </div>
);

const Testimonials: FC = () => {
  const { testimonials, loading } = useTestimonials(6);

  const testimonialElements = testimonials.map((testimonial) => (
    <TestimonialCard
      key={testimonial.id}
      name={testimonial.name}
      body={testimonial.body}
    />
  ));

  return (
    <div className="flex flex-col gap-1 p-8 text-[#6c63ff] justify-center items-center h-[450px] sm:h-[400px] lg:h-[500px]">
      <div className="flex flex-col gap-2 text-center h-50">
        <h2 className="text-2xl lg:text-3xl font-bold">What Our Users Say</h2>
        <p className="text-lg lg:text-2xl text-[#6c63ff]">
          Don't just take our word for it. <br /> Here's what our community of
          streamers loves about our platform.
        </p>
      </div>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-32 text-lg h-50">
          <LoadingThreeDotsJumping />
        </div>
      ) :
        (<ElementScrollLinked elements={testimonialElements} />)
      }
    </div>
  );
};

export default Testimonials;