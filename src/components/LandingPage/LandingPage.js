import React from "react";
import { Link } from "react-router-dom";
import programmer from "../../assets/programmer.png";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-800 min-h-screen">
      <div className="p-10">
        <div className="flex">
          <div>
            <div className="flex p-8">
              <div class="universe__part">
                <div class="universe__ufo">
                  <div class="universe__ufo-light"></div>
                </div>
              </div>
              <div className="px-12">
                <h2 className="text-white text-4xl font-serif"><h3 className="font-bold">PCSB</h3><h3 className="font-thin">Coding Platform</h3></h2>
                <br />
                <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  <Link to="/contest">View Contest</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="w-3/12 h-6/12">
            <img
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 img_handle"
              src={programmer}
              alt=""
            />
          </div>
        </div>
        <div className="p-4"></div>
      </div>
    </div>
  );
};

export default LandingPage;
