import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Countdown({ seconds }) {
  const [timer, setTimer] = useState(seconds);
  const navigate = useNavigate();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(() => timer - 1);
    }, 1000);

    if (timer == 0) {
      navigate("/")
      clearInterval(timerInterval)
    };

    return () => {
      clearInterval(timerInterval);
    };
  });

  return (
    <div className=" text-center flex justify-center space-x-2">
      <div>{parseInt(timer / (3600 * 24)) + " Days,"}</div>
      <div className="flex space-x-1">
        <div>
          {parseInt((timer % (3600 * 24)) / 3600).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
        </div>
        <div>:</div>
        <div>
          {parseInt((timer % 3600) / 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
        </div>
        <div>:</div>
        <div>
          {parseInt(timer % 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
}
