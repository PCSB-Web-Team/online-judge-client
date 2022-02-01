import React, { useEffect, useState } from "react";
import "../src/styles/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import Loader from "./components/Loader/Loader";
import MySubmission from "./pages/Submission/MySubmission";
import Dashboard from "./pages/DashBoard/DashBoard";
import ContestDashBoard from "./pages/ContestDashboard/ContestDashBoard";
import OverallLeaderBoard from "./pages/LeaderBoard/OverallLeaderBoard";
import LandingPage from "./components/LandingPage/LandingPage";
import NotFound from "./components/NotFound/NotFound";
import WebTeam from "./components/WebTeam/WebTeam";
import Footer from "./components/Footer";

function App(props) {
  const [isloading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("pcsb-oj-token");
    if (token) {
      setIsLoading(true);
      Requests.getUserByToken(token)
        .then((res) => {
          props.log(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          navigate("/");
        });
    } else {
      navigate("/");
    }
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isloading ? (
        <div>
          <Loader></Loader>
        </div>
      ) : (
        <div className="background">
          <Navbar />
          <Routes>
            {props.isAuthenticated ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path=":contestId/:questionId/submission"
                  element={<MySubmission />}
                />
                <Route path="/:contestId/*" element={<ContestDashBoard />} />
                <Route path="/webteam" element={<WebTeam/>}/>
              </>
            ) : (
              <>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/contest" element={<Dashboard />} />
                <Route path="/webteam" element={<WebTeam/>}/>
                <Route path="" element={<NotFound />} />
              </>
            )}
          </Routes>
          <Footer/>
        </div>
      )}
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
    log: (userData) => dispatch(login(userData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(App);
