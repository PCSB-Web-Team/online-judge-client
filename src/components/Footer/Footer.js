import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="background text-white p-2 bg-gray-800 dark:bg-black">
      <center>
        <h1>
          Designed & Developed by <Link to="/ourteam">
            <span className="hover:dark:text-cyan-500 hover:text-gray-500">
               PCSB Web Team
            </span>
          </Link>
          
        </h1>
      </center>
    </div>
  );
};

export default Footer;
