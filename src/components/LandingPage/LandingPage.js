import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="background  align-center">
      <div>
        <div class="box p-10">
          <h2 className="text-white text-2xl">PCSB Coding Platform</h2>
          <div className="p-8 px-20">
            <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link to="/contest">View Contest</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
