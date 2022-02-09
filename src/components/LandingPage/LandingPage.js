import React from "react";
import { Link } from "react-router-dom";
import programmer from "../../assets/programmer.png";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 md:-mt-16">
      <div className="flex items-center md:justify-between w-full flex-col xl:flex-row">
        <div className="p-8 py-24 flex flex-col items-center justify-center xl:block xl:p-20">
          <h2 className="text-white text-5xl">
            <h3 className="font-bold">PCSB</h3>
            <h3 className="font-thin">Coding Platform</h3>
          </h2>
          <p className="text-xl text-center text-white my-4 uppercase xl:text-3xl xl:text-left">
            Codeverse - A Coding Compition
          </p>
          <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <Link to="/contest">Enter Contest</Link>
          </button>
        </div>
        <div className="w-6/12 h-6/12 p-24">
          <img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300" src={programmer} alt="programmer" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
