import React from "react";
import web1 from "../assets/web-1.png";
import web2 from "../assets/web-2.png";
import web3 from "../assets/web-3.png";
import web4 from "../assets/web-4.png";
import web5 from "../assets/web-5.png";
import web6 from "../assets/web-6.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: web1,
      title: (
        <a
          href="https://youtube-video-fetching.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Youtube Search Application
        </a>
      ),
    },
    {
      id: 2,
      src: web2,
      title: (
        <a href="https://germaine.vercel.app/" target="_blank" rel="noreferrer">
          Germaine Restaurent Website(React.js)
        </a>
      ),
    },
    {
      id: 3,
      src: web3,
      title: (
        <a
          href="https://imaasif01.github.io/job-portal/"
          target="_blank"
          rel="noreferrer"
        >
          Job Portal using javaScript
        </a>
      ),
    },
    {
      id: 4,
      src: web4,
      title: (
        <a
          href="https://tesla-clone1-orpin.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Tesla website clone
        </a>
      ),
    },
    {
      id: 5,
      src: web5,
      title: (
        <a
          href="https://imaasif01.github.io/Images-search/"
          target="_blank"
          rel="noreferrer"
        >
          Image search application
        </a>
      ),
    },
    {
      id: 6,
      src: web6,
      title: (
        <a href="https://mappath.netlify.app/" target="_blank" rel="noreferrer">
          MapPath using javaScript
        </a>
      ),
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 text-xl tracking-wide leading-relaxed">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio📝
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="ThePortfolioPic"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center group">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
                <p className="text-center m-5 font-semibold text-gray-400 group-hover:text-white ">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
