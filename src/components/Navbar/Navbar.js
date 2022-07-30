import React, { useState } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../store/actions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function logout() {
    props.logout();
    toast.success("Logged Out Successfully");
    localStorage.clear();
  }
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-black") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          {props.isAuthenticated && (
            <div className=" font-bold text-2xl flex items-center text-gray-300">
              <img
                src={
                  "https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png"
                }
                className="h-8 md:h-10 w-auto"
              ></img>
              <div className=" px-2">{props.userData.name}</div>
            </div>
          )}
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-50") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center  lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded " : " hidden")
          }
          id="example-navbar-warning"
        >
          {props.isAuthenticated ? (
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to={`/`}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-100 text-gray-50"
                      : "text-gray-50 hover:text-gray-100") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:text-cyan-300"
                  }
                >
                  <span className="hide-sm">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={`/contest`}
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-100 text-gray-50"
                      : "text-gray-50 hover:text-gray-100") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:text-cyan-300"
                  }
                >
                  <span className="hide-sm">DashBoard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={logout}
                  to="/"
                  replace
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-100 text-gray-50"
                      : "text-gray-50 hover:text-gray-100") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:text-cyan-300"
                  }
                >
                  <i className="fas fa-sign-out-alt"></i>
                  <span className="hide-sm"> &nbsp;Logout</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/login"
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-100 text-gray-50"
                      : "text-gray-50 hover:text-gray-100") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold hover:text-cyan-300"
                  }
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
    userData: state.userData,
  };
}
function mapActionToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Navbar);
