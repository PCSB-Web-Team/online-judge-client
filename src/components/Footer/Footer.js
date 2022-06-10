import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="background text-white p-2 bg-gray-800">
      <center>
        <h1>
          Made with 🤍 <Link to="/ourteam"> <u>by PCSB Web Team</u> </Link>
        </h1>
      </center>
    </div>
  );
};

export default Footer;
