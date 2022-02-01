import React from "react";
import user from "../../assets/user.png";

const WebTeam = () => {
  return (
    <div className="background">
      <div className="text-white">
        <div className="box p-8">
          <center>
          <div className="text-2xl p-8">Our Team</div> 
            <div className="flex px-8">
              <div className="mb-24">
                <img src={user} className="w-6/12 rounded-full" alt="" />
              </div>
              <div className="mb-24">
                <img src={user} className="w-6/12 rounded-full" alt="" />
              </div>
              <div className="mb-24">
                <img src={user} className="w-6/12 rounded-full" alt="" />
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default WebTeam;
