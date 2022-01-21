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
import NotFound from "./components/NotFound";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Problem from "./pages/EditorPage/Problem";
import MySubmission from "./pages/Submission/MySubmission";
import ContestDashboard from "./pages/ContestDashboard/ContestDashBoard";
import Dashboard from "./pages/DashBoard/DashBoard";

function App(props) {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		setLoading(true);
		const token = localStorage.getItem("pcsb-oj-token");
		// console.log(token);
		if (token) {
			Requests.getUserByToken(token)
				.then((res) => {
					props.log(res.data);

					setLoading(false);
				})
				.catch((error) => {
					navigate("/");
				});
		} else {
			navigate("/");
		}
		setLoading(false);
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="/" element={<Dashboard />} />
				<Route path=":contest" element={<ContestDashboard />} />
				<Route path=":question-id" element={<Problem />} />
				<Route path="leaderboard" element={<LeaderBoard />} />
				<Route path="submissions" element={<MySubmission />} />
				<Route
					path="submissions/:submission-id"
					element={<div></div>}
				></Route>
				<Route element={<NotFound />} />
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
