//This component is a contact form that allows users to send messages. It includes fields for name, email, and message, and a submit button. The form is styled with Tailwind CSS classes for responsiveness and aesthetics.
import { FC, useState } from "react";
import { MdEmail } from "react-icons/md";

const NewsletterSubscriptionForm: FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
      setEmail("");

      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-8 p-8 text-white justify-center items-center bg-[#36323b]">
      <div className="flex flex-col gap-2 text-center items-center">
        <div className="text-5xl"><MdEmail /></div>
        <h2 className="text-2xl lg:text-3xl font-bold">Stay Informed</h2>
        <p className="text-lg lg:text-2xl">
          Get notifications about new releases, exclusive content, and special offers.
        </p>
      </div>
      <div className="w-[100%] text-white p-2 rounded-lg text-center">
        <form
          className="flex gap-4 h-full p-3 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            id='email'
            placeholder='your@email.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-[10px] w-full max-w-md border border-[#ccc] rounded-lg lg:text-xl"
          />
          <button
            type='submit'
            className="p-[10px] w-full max-w-md bg-white text-[#36323b] border border-[#36323b] rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-[#36323b] hover:text-white hover:border-white lg:text-xl"
          >
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-green-400 mt-4">Subscription successful!</p>
        )}

        <p className="mt-4 text-sm text-gray-300">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscriptionForm;
