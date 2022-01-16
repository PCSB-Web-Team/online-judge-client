import React, { useEffect } from "react";
import "../src/styles/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Problem from "./pages/EditorPage/Problem";
import MySubmission from "./pages/Submission/MySubmission";
import ContestDashboard from "./pages/ContestDashBoard/ContestDashBoard";
import Dashboard from "./pages/Dashboard/Dashboard";

const data_contest = [
  {
    id: 1,
    title: "contest 1",
  },
  {
    id: 2,
    title: "contest 2",
  },
  {
    id: 3,
    title: "contest 3",
  },
];

function App(props) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("pcsb-oj-token");
    if (token) {
      navigate("/Loader");
      Requests.getUserByToken(token)
        .then((res) => {
          props.log(res.data);
          props.log(res.data_contest);
          navigate(`/contest/:${data_contest.id}`);
        })
        .catch((error) => {
          navigate("/Home");
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":contest-id" element={<ContestDashboard />}>
          <Route path=":question-id" element={<Problem />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="submissions" element={<MySubmission />} />
          <Route path="submissions/:submission-id" element={<div></div>}></Route>
        </Route>
        <Route path="/" element={<Dashboard />} />
        <Route path="" element={<NotFound />} />
      </Routes>
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