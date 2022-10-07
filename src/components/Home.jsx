import React from "react";
import { Link } from "react-scroll";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

import "./Home.css";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-10"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-2xl flex flex-col items-center align-center justify-center h-full text-center lg:py-16 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
          I'm a Front-end React.js developer👨‍💻
        </h1>
        <p class="mb-8 text-xl font-normal text-gray-500  sm:px-16 xl:px-48 dark:text-gray-400 py-4 leading-loose -tracking-tighter">
          I'm a passionate developer who loves making beautiful, functional web
          application using modern workflows. I Specialize in React-js,but also
          have experience with other technologies such as UI Design Using Figma.
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="Portfolio"
            smooth
            duration={500}
            className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer font-bold group"
          >
            Portfolio
            <span className="group-hover:scale-125 duration-300">
              <BsArrowRightShort size={25} className="ml-2" />
            </span>
          </Link>
          <div>
            <Link
              to="Contact"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border border-gray-300 hover:bg-gray-600  cursor-pointer font-bold group contact-btn"
            >
              Contact
              <span className="group-hover:scale-110 duration-300">
                <AiOutlinePhone size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
