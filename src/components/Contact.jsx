import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
        <div className="text-center pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact📲
          </p>
          <p className="py-6 text-xl tracking-wide leading-relaxed text-center font-semibold">
            Get in Touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/8f3c242a-2062-46d9-a384-7715a1e1ab1c"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="yourname@gmail.com"
              className="my-4 p-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="6"
              placeholder=" Share some good news!"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline:none"
            ></textarea>

            <button className="text-white w-full inline-block bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300 text-center">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
