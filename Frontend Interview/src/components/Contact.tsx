//This component is a contact form that allows users to send messages. It includes fields for name, email, and message, and a submit button. The form is styled with Tailwind CSS classes for responsiveness and aesthetics.
import { FC, useState } from "react";

const Contact: FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula una llamada a la API

      setFormSubmitted(true);
      setError(null);
    } catch (error) {
      setError("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-8 p-8 text-[#6c63ff] justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold">Contact</h2>
        <p className="text-lg lg:text-2xl text-[#6c63ff]">
          Do you have questions? <br />We'd love to hear from you.
        </p>
      </div>

      <div className="h-[450px] w-[100%] bg-[#6c63ff] text-white p-2 rounded-lg">
        {formSubmitted ? (
          <div className="p-4 bg-green-500 text-white rounded-lg text-center flex justify-center">
            <p>Your message was sent successfully!</p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-2 h-full p-3 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="flex-1 flex flex-col w-full">
              <label htmlFor="name" className="font-bold mb-[5px] lg:text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                required
                className="p-[10px] border-1 border-[#ccc] rounded-lg lg:text-xl"
              />
            </div>
            <div className="flex-1 flex flex-col w-full">
              <label htmlFor="email" className="font-bold mb-[5px] lg:text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                required
                className="p-[10px] border-1 border-[#ccc] rounded-lg lg:text-xl"
              />
            </div>
            <div className="flex-1 flex flex-col w-full">
              <label htmlFor="message" className="font-bold mb-[5px] lg:text-xl">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                required
                maxLength={1000}
                className="resize-vertical max-h-[50vh] overflow-y-auto p-[10px] border-1 border-[#ccc] rounded-lg lg:text-xl"
              ></textarea>
            </div>
            <button
              type="submit"
              className="max-w-100 w-full p-[10px] bg-white text-[#6c63ff] border border-[#6c63ff] rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-[#6c63ff] hover:text-white hover:border-white lg:text-xl"
            >
              Send Message
            </button>
          </form>
        )}

        {error && (
          <div className="p-4 bg-red-500 text-white rounded-lg mt-4 text-center">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
