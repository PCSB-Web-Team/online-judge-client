import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Requests } from "../../utils/Index";

const ContestHeader = (props) => {

  const [title, setTitle] = useState()
  
  return (
    <div className="">
      <div class="px-2">
        <div class="flex -mx-2">
          <div class="w-1/3 px-2">
            <div class="bg-gray-400 hover:bg-gray-500 h-12 text-white text-center p-2"> 
              <Link to={""}>Problem</Link>{" "}
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-400 hover:bg-gray-500 h-12 text-white text-center p-2">
              <Link to={"/"}>Submission</Link>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="bg-gray-400 hover:bg-gray-500 h-12 text-white text-center p-2">
              <Link to={"/"}>Leader Board</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="contest-name px-32 py-4 text-lg">{title}</div>
        <div className="score-timer">
          <div>Time Left: </div>
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
