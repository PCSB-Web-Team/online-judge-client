import React from "react";
import aryan from "../../static/Team/aryan.jpg";
import vedant from "../../static/Team/vedant.jpg";
import mansi from "../../static/Team/mansi.jpg";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const OurTeam = () => {
  return (
    <div className="bg-gray-700 dark:bg-black ">
      <div className="text-white">
        <div className="box p-8">
          <center>
            <div className="text-4xl p-8">
              <h2 className="font-bold">PCSB</h2>
              <h3 className="">Coding Platform Team</h3>
            </div>
            <div className="container flex flex-wrap flex-col md:flex-row items-center justify-center py-4">
              <div className=" p-16">
                <img src={aryan} className="w-80 rounded-full " alt="aryan" />
                <label className="py-10 text-xl">Aryan Agrawal</label>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/-aryanagrawal/"
                    target="blank"
                    className="text-2xl px-2 py-1 transform transition duration-500 hover:scale-125 transform transition duration-500 hover:scale-125 "
                  >
                    <GrLinkedinOption />
                  </a>
                  <a
                    href="https://github.com/aryanagrawal22"
                    target="blank"
                    className="text-2xl px-2 py-1 transform transition duration-500 hover:scale-125 transform transition duration-500 hover:scale-125"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
              <div className=" p-16">
                <img src={vedant} className="w-80 rounded-full " alt="vedant" />
                <label className="py-10 text-xl">Vedant Daigavane</label>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/vedant-daigavane-25785315a/"
                    target="blank"
                    className="text-2xl px-2 py-1 transform transition duration-500 hover:scale-125 transform transition duration-500 hover:scale-125"
                  >
                    <GrLinkedinOption />
                  </a>
                  <a
                    href="https://github.com/daigavane70"
                    target="blank"
                    className="text-2xl px-2 py-1 transform transition duration-500 hover:scale-125 transform transition duration-500 hover:scale-125"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
              <div className=" p-16">
                <img src={mansi} className="w-80 rounded-full " alt="mansi" />
                <label className="py-10 text-xl">Mansi Gundre</label>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/mansi-gundre-a6a722207/"
                    target="blank"
                    className="text-2xl px-2 py-1 transform transition duration-500 hover:scale-125 transform transition duration-500 hover:scale-125"
                  >
                    <GrLinkedinOption />
                  </a>
                  <a
                    href="https://github.com/mansi0829"
                    target="blank"
                    className="text-2xl px-2 py-1 transform transition duration-500 hover:scale-125 transform transition duration-500 hover:scale-125"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
