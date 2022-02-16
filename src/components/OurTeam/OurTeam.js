import React from "react";
import user from "../../assets/user.png";
import aryan from "../../assets/aryan.jpg";
import vedant from "../../assets/vedant.jpg";
import mansi from "../../assets/mansi.jpg";

const OurTeam = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 min-h-screen">
      <div className="text-white">
        <div className="box p-8">
          <center>
            <div className="text-4xl p-8">
              <h2 className="font-bold">PCSB</h2>Coding Platform Team
            </div>
            <div className="container flex flex-wrap flex-col md:flex-row items-center justify-center py-4">
              <div className="mb-24 p-12">
                <a href="https://www.linkedin.com/in/-aryanagrawal/">
                  <img
                    src={aryan}
                    className="w-80 rounded-full transform transition duration-500 hover:scale-125"
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-24 p-12">
                <a href="https://www.linkedin.com/in/vedant-daigavane-25785315a/">
                  <img
                    src={vedant}
                    className="w-80 rounded-full transform transition duration-500 hover:scale-125"
                    alt=""
                  />
                </a>
              </div>
              <div className="mb-24 p-12">
                <a href="https://www.linkedin.com/in/mansi-gundre-a6a722207/">
                  <img
                    src={mansi}
                    className="w-80 rounded-full transform transition duration-500 hover:scale-125"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
