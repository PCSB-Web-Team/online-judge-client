import React from "react";
import caret from "../assets/user.png";
import { Link } from "react-router-dom";
import { login } from "../store/actions";
import { connect } from "react-redux";
import Countdown from "./countdown";

const Card = ({ status, ...props }) => {
  return (
    <div className="w-80 rounded-sm border-2 border-sky-200 hover:border-indigo-400 overflow-hidden shadow-lg m-12">
      <img
        src={caret}
        alt="contest"
        className="h-32 sm:h-48 w-full object-cover"
      />
      <div className="p-4 py-8">
        <div className="text-2xl text-gray-darker mb-4 text-sky-500">
          {props.title}
        </div>
        <div className="flex justify-between mb-4 text-gray-400">
          <div>Date: </div>
          <div className="">{props.date}</div>
        </div>
        <div className="mb-8">
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
            <div className="font-bold text-red-600 text-center">
              Contest Ended
            </div>
          )}
        </div>
        <div className=" text-center">
          <Link to={props.isAuthenticated ? `/${props.contestId}` : "/login"}>
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              disabled={!status.time}
            >
              Enter Contest
            </button>
          </Link>
        </div>
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
