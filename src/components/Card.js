import React from "react";
import caret from "../assets/user.png";
import { Link } from "react-router-dom";
import { login } from "../store/actions";
import { connect } from "react-redux";

const Card = (props) => {
  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-12">
      <img
        src={caret}
        alt="contest"
        className="h-32 sm:h-48 w-full object-cover"
      />
      <div className="m-4">
        <div className="font-medium text-base text-gray-darker mb-4">
          {props.title}
        </div>
        <p class="font-normal text-gray-dark text-sm mb-2">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <br />
        <br />
        {props.isAuthenticated ? (
          <Link
            to={`/${props.contestId}`}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
          >
            Enter Contest
          </Link>
        ) : (
          <Link
            to={`/login`}
            className="text-white bg-gray-800 dark:bg-slate-900 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
          >
            Enter Contest
          </Link>
        )}
      </div>
      <div className="p-4">
        <br />
        <span>{props.date}</span>
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
