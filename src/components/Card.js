import React from "react";
import { Link } from "react-router-dom";
import { login } from "../store/actions";
import { connect } from "react-redux";
import Countdown from "./countdown";

const Card = ({ status, ...props }) => {
  return (
    <div className="w-80 rounded-lg hover:scale-105 transform transition overflow-hidden shadow-lg h-full">
      <img
        src={
          props.logo ||
          "https://cdn.pixabay.com/photo/2016/05/08/14/58/icon-1379228__340.png"
        }
        alt="contest"
        className="h-32 sm:h-48 w-full object-cover opacity-80"
      />
      <div className="p-4 space-y-2 bg-slate-50">
        <div className="text-2xl text-gray-darker text-cyan-500 py-2 border-b mb-4">
          {props.title}
        </div>
        <div className="flex font-light justify-between text-gray-400">
          <div className=" font-light">Date: </div>
          <div className="">{props.date}</div>
        </div>
        <div className="">
          {status.time ? (
            status.description == "RUNNING" ? (
              <div className="flex justify-between text-gray-500">
                <div className=" font-light text-sky-400">Ends in</div>
                <Countdown seconds={status.time}></Countdown>
              </div>
            ) : (
              <div className="flex justify-between text-gray-500">
                <div className=" font-light">Starts in</div>
                <Countdown seconds={status.time}></Countdown>
              </div>
            )
          ) : (
            <div className="font-bold text-red-300 text-center">
              Contest Ended
            </div>
          )}
        </div>
        {status.time > 0 && (
          <div className=" text-center">
            <Link to={props.isAuthenticated ? `/${props.contestId}` : "/login"}>
              <button
                className="text-white bg-cyan-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                disabled={!status.time}
              >
                Enter Contest
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}
function mapActionToProps(dispatch) {
  return {
    login: () => dispatch(login()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Card);
