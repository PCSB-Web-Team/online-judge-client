import React, { useEffect } from "react";

const ContestHeader = () => {
  useEffect(() => {
    var x = setInterval(function () {
      var countDownDate = new Date("Dec 28, 2021 23:37:25").getTime();
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0");

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  });

  return (
    <div className="">
      <div className="flex shadow">
        <p className="px-32">PROBLEMS</p>
        <p className="px-32">SUBMISSIONS</p>
        <p className="px-32">LEADERBOARD</p>
      </div>
      <div className="flex">
        <div className="contest-name px-32 py-4 text-lg">Contest Name</div>
        <div className="score-timer px-72 py-4 flex">
          <div className="score text-lg">Score : </div>
          <div id="timer" className="text-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ContestHeader;
