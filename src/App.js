import React, { useEffect, useState } from "react";
import "../src/styles/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Requests } from "./api/Index";
import { login } from "./store/actions";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Login from "./auth/Login";
// import Register from "./pages/LoginPage/Register";
import Dashboard from "./pages/DashBoard/DashBoard";
import ContestDashBoard from "./pages/ContestDashboard/ContestDashBoard";
import LandingPage from "./pages/LandingPage/LandingPage";
import NotFound from "./components/NotFound/NotFound";
import OurTeam from "./pages/OurTeam/OurTeam";
import Footer from "./components/Footer/Footer";

function App(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("pcsb-oj-token");
    if (token) {
      Requests.getUserByToken(token)
        .then((res) => {
          props.login(res.data);
        })
        .catch((error) => {});
    } else {
    }
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <div className="min-h-[92vh] h-fit bg-gradient-to-r from-slate-700 via-gray-800 to-gray-900 text-gray-50">
          <Routes>
            {props.isAuthenticated ? (
              <>
                <Route path="/:contestId/*" element={<ContestDashBoard />} />
              </>
            ) : (
              <>
                <Route path="login" element={<Login />} />
                {/* <Route path="register" element={<Register />} /> */}
              </>
            )}
            <Route path="/contest" element={<Dashboard />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}
function mapActionToProps(dispatch) {
  return {
    login: (userData) => dispatch(login(userData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(App);
