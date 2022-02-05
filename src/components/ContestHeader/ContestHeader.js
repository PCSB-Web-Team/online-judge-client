import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Countdown from "./Countdown";

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
    <div class="space-y-4 md:space-y-0 md:flex md:justify-between tracking-wider text-sm mb-8">
      <div class=" flex justify-around space-x-4">
        {tabs.map((tab, index) => (
          <NavLink
            to={tab.link}
            end
            className={({ isActive }) =>
              `hover:border-b-2  border-sky-300 transform transition rounded-lg p-2 px-4 md:px-8 font-light ${
                isActive ? " border-b-2 bg-sky-100" : "text-black border-b"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <div class="">
        <div class="transform transition text-center rounded-lg p-2 px-8 font-light bg-green-200">
          <Countdown seconds={props.data.status.time} />
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
