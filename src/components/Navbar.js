import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../store/actions";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function logout() {
    props.logout();
    localStorage.removeItem("pcsb-oj-token");
  }
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-gray-800 shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <h1>
            <Link
              to="/"
              className={
                (props.transparent ? "text-white" : "text-gray-50") +
                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              }
            >
              HOME
            </Link>
          </h1>
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
            "lg:flex flex-grow items-center bg-gray-800 lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded " : " hidden")
          }
          id="example-navbar-warning"
        >
          {props.isAuthenticated ? (
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to={`/`}
                  onClick={() => setNavbarOpen()}
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-100 text-gray-50"
                      : "text-gray-50 hover:text-gray-100") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  <i className="fas fa-sign-out-alt"></i>{" "}
                  <span className="hide-sm"> &nbsp;Logout</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/register"
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-100 text-gray-50"
                      : "text-gray-50 hover:text-gray-100") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-100 text-gray-50"
                      : "text-gray-50 hover:text-gray-100") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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
  };
}
function mapActionToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Navbar);
