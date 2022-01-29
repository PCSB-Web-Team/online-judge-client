import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Requests } from "../../utils/Index";

const ContestHeader = () => {
  const [timer, setTimer] = useState();
  const [data, setData] = useState();
  const { contestId } = useParams();

  useEffect(() => {
    Requests.getSpecificContests(contestId).then((res) => {
      setTimer(res.data.status.time);
      setData(res.data.title);
    });
  }, []);
  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <div className="">
      <div className="flex shadow">
        <p className="px-32">PROBLEMS</p>
        <p className="px-32">SUBMISSIONS</p>
        <p className="px-32">LEADERBOARD</p>
      </div>
      <div className="flex">
        <div className="contest-name px-32 py-4 text-lg">{data}</div>
        <div className="score-timer px-72 py-4 flex">
          <div>Time Left: {timer}</div>
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
