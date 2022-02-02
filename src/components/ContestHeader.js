import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Countdown from "./countdown";

const ContestHeader = (props) => {
  const { contestId } = useParams();
  const tabs = [
    {
      name: "Question",
      link: `/${contestId}`,
    },
    {
      name: "Submissions",
      link: `/${contestId}/submission`,
    },
    {
      name: "Leaderboard",
      link: `/${contestId}/leaderboard`,
    },
  ];
  return (
    <div className="">
      <div class=" md:flex md:justify-between">
        <div class="flex space-x-4">
          {tabs.map((tab, index) => (
            <NavLink
              to={tab.link}
              end
              className={({ isActive }) =>
                `hover:border-b-2  border-sky-300 transform transition text-center rounded-lg p-4 px-8 font-light tracking-widest ${
                  isActive ? " border-b-2 bg-sky-100" : "text-black "
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
        <div class="">
          <div class="hover:border-b-2  border-sky-300 transform transition text-center rounded-lg p-4 px-8 font-light tracking-widest bg-green-100">
            <Countdown seconds={props.data.status.time} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;