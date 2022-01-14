import React, { useEffect } from "react";
import "../src/styles/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound";
import DashBoard from "./pages/DashBoard/DashBoard";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Problem from "./pages/EditorPage/Problem"
import { Requests } from "./utils/Index";
import { login } from "./store/actions";
import { connect } from "react-redux";
import MySubmission from "./pages/Submission/MySubmission";

function App(props)
{
	const navigate = useNavigate()
	useEffect(() =>
	{
		const token = localStorage.getItem("pcsb-oj-token")
		if (token)
		{
			navigate("/Loader")
			Requests.getUserByToken(token).then((res) =>
			{
				props.log(res.data)
				navigate("/dashBoard");
			}).catch(error => { navigate("/Home") })
		}
	}, []);

	return (

		<div className="App">
			<Navbar />
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="dashBoard" element={<DashBoard />} />
				<Route path="home" element={<Home />} />
				<Route path="problem" element={<Problem />} />
				<Route path="loader" element={<Loader />} />
				<Route path="leaderboard" element={<LeaderBoard />} />
				<Route path="mySubmission" element={<MySubmission />} />
				<Route path="/" element={<Home />} />
				<Route path="" element={<NotFound />} />
			</Routes>
		</div>
	);
}

function mapStateToProps(state)
{
	return {
		isAuthenticated: state.isAuthenticated
	}
}
function mapActionToProps(dispatch)
{
	return {
		log: (userData) => dispatch(login(userData))
	}
}

export default connect(mapStateToProps, mapActionToProps)(App);
