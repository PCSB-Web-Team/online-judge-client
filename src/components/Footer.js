import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="background text-white p-2">
      <center>
      <p className="">
        Made with ❤️ <Link to="/webteam"> by PICT Web Team</Link>
      </p>
      </center>
      
    </div>
  );
};

export default Footer;
