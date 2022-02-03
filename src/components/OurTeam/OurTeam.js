import React from "react";
import user from "../../assets/user.png";

const OurTeam = () => {
  return (
    <div className="background">
      <div className="text-white">
        <div className="box p-8">
          <center>
          <div className="text-2xl p-8">Our Team</div> 
            <div className="flex px-8">
              <div className="mb-24 ">                
              <a href="https://www.linkedin.com/in/mansi-gundre-a6a722207/" className="bg-gray-800 hover:bg-gray-500"><img src={user} className="w-6/12 rounded-full transform transition duration-500 hover:scale-125" alt="" /></a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
