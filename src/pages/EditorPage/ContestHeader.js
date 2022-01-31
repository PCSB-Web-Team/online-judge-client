import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Requests } from "../../utils/Index";

const ContestHeader = (props) => {
  const [timer, setTimer] = useState(props.timer);
  const [title, setTitle] = useState();

  const id = React.useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return (
    <div className="">
      <div className="flex shadow">
        <p className="px-32"> <Link to={"/"}>PROBLEMS</Link> </p>
        <p className="px-32"> <Link to={"/"}>SUBMISSIONS</Link> </p>
        <p className="px-32"> <Link to={"/"}>LEADERBOARD</Link></p>
      </div>
      <div className="flex">
        <div className="contest-name px-32 py-4 text-lg">{title}</div>
        <div className="score-timer px-72 py-4 flex">
          <div>Time Left: {timer}</div>
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
