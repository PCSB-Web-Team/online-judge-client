import React from "react";
import { Link } from "react-router-dom";
import CountDownTimer from "@inlightmedia/react-countdown-timer"

const ContestHeader = (props) => {
  
  return (
    <div className="">
      <div class="px-2">
        <div class="flex -mx-2">
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center p-2"> 
              <Link to={""}>Problem</Link>
            </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center p-2">
              <Link to={"/submission"}>Submission</Link>
            </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center p-2">
              <Link to={"/leaderboard"}>Leader Board</Link>
            </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center">
              Time : <CountDownTimer dateTime={props.timer}></CountDownTimer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
