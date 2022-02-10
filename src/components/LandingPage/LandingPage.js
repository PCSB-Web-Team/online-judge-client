import React from "react";
import { Link } from "react-router-dom";
import programmer from "../../assets/programmer.png";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 md:-mt-16 min-h-screen">
      <div className="container p-8 pt-20 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            PCSB
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Coding Platform
            </span>
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link to="/contest">Enter Contest</Link>
            </button>
          </p>
        </div>
        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <img
            className="mx-auto w-full md:w-4/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            src={programmer}
            alt="coding platform"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
