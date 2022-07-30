import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" text-white p-2 bg-black">
      <center>
        <h1>
          Designed & Developed by <Link to="/ourteam">
            <span className="hover:text-cyan-500 ">
               PCSB Web Team
            </span>
          </Link>
          
        </h1>
      </center>
    </div>
  );
};

export default Footer;
