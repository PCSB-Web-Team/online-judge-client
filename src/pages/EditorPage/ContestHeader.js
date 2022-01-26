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
    <div className="contest-header">      
        <div className="contest-header-top">
        <div className="flex ">
            <p className="px-10">PROBLEMS</p>
            <p className="px-10">SUBMISSIONS</p>
            <p className="px-10">LEADERBOARD</p>
        </div>
          <div className="contest-name">Contest Name</div>
          <div className="score-timer">
            <div className="score">Score</div>
            <div id="timer"></div>
        </div>
        </div>
    </div>
  );
};

export default ContestHeader;