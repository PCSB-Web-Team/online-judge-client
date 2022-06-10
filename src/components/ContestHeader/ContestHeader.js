import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Countdown from "./Countdown";

const ContestHeader = (props) => {
  const { contestId } = useParams();
  const userId = localStorage.getItem("userId");
  const tabs = [
    {
      name: "Question",
      link: `/${contestId}`,
    },
    {
      name: "My Submissions",
      link: `/${contestId}/submission/${userId}`,
    },
    {
      name: "Leaderboard",
      link: `/${contestId}/leaderboard`,
    },
  ];
  return (
    <div className="space-y-4 w-11/12 mx-auto pt-5 md:space-y-0 md:flex md:justify-between tracking-wider text-sm mb-8">
      <div className=" flex justify-around space-x-4">
        {tabs.map((tab, i) => (
          <NavLink
            key={`navlink${i}`}
            to={tab.link}
            end
            className={({ isActive }) =>
              `hover:border-b-2  border-sky-500 transform transition rounded-lg p-2 px-4 md:px-8 font-light ${
                isActive ? " border-b-2 bg-sky-300" : "text-black border-b"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
      <div>
        <div className="transform transition text-center rounded-lg p-2 px-8 font-light bg-green-200">
          <Countdown seconds={props.data.status.time} />
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
