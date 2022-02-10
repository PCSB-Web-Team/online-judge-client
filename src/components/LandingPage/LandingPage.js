import React from "react";
import { Link } from "react-router-dom";
import programmer from "../../assets/programmer.png";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 md:-mt-16 min-h-screen">
      <div class="container p-8 pt-20 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            PCSB
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Coding Platform
            </span>
          </h1>
          <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link to="/contest">Enter Contest</Link>
            </button>
          </p>
        </div>
        <div class="w-full xl:w-3/5 p-12 overflow-hidden">
          <img
            class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
            src={programmer}
            alt="coding platform"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
