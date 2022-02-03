import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="background text-white p-2 bg-black">
      <center>
        <p className="">
          Made with 🤍 <Link to="/webteam"> by PCSB Web Team</Link>
        </p>
      </center>
    </div>
  );
};

export default Footer;
