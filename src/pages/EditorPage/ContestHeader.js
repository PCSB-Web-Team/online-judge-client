import React from "react";
import { Link, useParams } from "react-router-dom";
import Countdown from "../../components/countdown";

const ContestHeader = (props) => {
  const {contestId} = useParams();
  return (
    <div className="">
      <div class="px-2">
        <div class="flex ">
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center p-2"> 
              <Link to={`/${contestId}`}>Problem</Link>
            </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center p-2">
              <Link to={`/${contestId}/submission`}>Submission</Link>
            </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center p-2">
              <Link to={`/${contestId}/leaderboard`}>Leader Board</Link>
            </div>
          </div>
          <div class="w-1/4 px-2">
            <div class="bg-gray-500 hover:bg-gray-600 h-12 text-white text-center">
              Time : <Countdown seconds={props.data.status.time}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
