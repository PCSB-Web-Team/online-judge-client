import React from "react";
import user from "../../assets/user.png";

const OurTeam = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 min-h-screen">
      <div className="text-white">
        <div className="box p-8">
          <center>
          <div className="text-2xl p-8">Our Team</div> 
            <div className="flex px-8">
              <div className="mb-24">                
              <a href=""><img src={user} className="w-6/12 rounded-full transform transition duration-500 hover:scale-125" alt="" /></a>
              </div>
              <div className="mb-24">                
              <a href=""><img src={user} className="w-6/12 rounded-full transform transition duration-500 hover:scale-125" alt="" /></a>
              </div>
              <div className="mb-24">                
              <a href=""><img src={user} className="w-6/12 rounded-full transform transition duration-500 hover:scale-125" alt="" /></a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
