import { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="flex flex-col gap-8 p-8 text-[#6c63ff] justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-lg text-[#6c63ff]">
          Do you have questions? <br />We'd love to hear from you.
        </p>
      </div>
      <div className="h-[450px] w-[100%] bg-[#6c63ff] text-white p-2 rounded-lg">
        <form className="flex flex-col gap-2 h-full p-3 justify-center items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-1 flex flex-col w-full">
            <label htmlFor='name' className="font-bold mb-[5px]">Name</label>
            <input type='text' id='name' placeholder='Your name' required className="max-w-100 p-[10px] border-1 border-[#ccc] rounded-lg" />
          </div>
          <div className="flex-1 flex flex-col w-full">
            <label htmlFor='email' className="font-bold mb-[5px]">Email</label>
            <input
              type='email'
              id='email'
              placeholder='your@email.com'
              required
              className="max-w-100 p-[10px] border-1 border-[#ccc] rounded-lg"
            />
          </div>
          <div className="flex-1 flex flex-col w-full">
            <label htmlFor='message' className="font-bold mb-[5px]">Message</label>
            <textarea
              id='message'
              rows={5}
              placeholder='Write your message here...'
              required
              maxLength={1000}
              className="resize-vertical max-h-[50vh] overflow-y-auto max-w-100 p-[10px] border-1 border-[#ccc] rounded-lg"
            ></textarea>
          </div>
          <button
            type='submit'
            className="max-w-100 w-full p-[10px] bg-white text-[#6c63ff] border border-[#6c63ff] rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-[#6c63ff] hover:text-white hover:border-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
