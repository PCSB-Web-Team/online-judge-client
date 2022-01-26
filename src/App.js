import React, { useEffect, useState } from "react";
import "../src/styles/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader/Loader";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Problem from "./pages/EditorPage/Problem";
import MySubmission from "./pages/Submission/MySubmission";
import AllSubmission from "./pages/Submission/AllSubmission";
import ContestDashboard from "./pages/ContestDashboard/ContestDashBoard";
import Dashboard from "./pages/DashBoard/DashBoard";

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
        <div className="App">
          <Navbar />
          <Routes>
            {props.isAuthenticated ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path=":contestId" element={<ContestDashboard />} />
                <Route path=":contestId/:questionId" element={<Problem />} />
                <Route
                  path=":contestId/:questionId/submission"
                  element={<MySubmission />}
                />
                <Route
                  path=":contestId/leaderboard"
                  element={<LeaderBoard />}
                />
                <Route path=":userId/submission" element={<AllSubmission />} />
              </>
            ) : (
              <>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<Dashboard />} />
                <Route element={<NotFound />} />
              </>
            )}
          </Routes>
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
