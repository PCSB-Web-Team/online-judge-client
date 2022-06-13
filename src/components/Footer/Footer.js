import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="background text-white p-2 bg-gray-800 dark:bg-black">
      <center>
        <h1>
          Made with 🤍<Link to="/ourteam"><span className="hover:dark:text-cyan-500 hover:underline"> by PCSB Web Team</span></Link>
        </h1>
      </center>
    </div>
  );
};

export default Footer;
