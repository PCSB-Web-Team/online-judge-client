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
import DashBoard from "./pages/DashBoard/DashBoard";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Problem from "./pages/EditorPage/Problem";
import MySubmission from "./pages/Submission/MySubmission";
import ContestDashBoard from "./pages/ContestDashboard/ContestDashBoard";

function App(props)
{
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false);
	useEffect(() =>
	{
		const token = localStorage.getItem("pcsb-oj-token")
		if (token)
		{
			setLoading(false)
			Requests.getUserByToken(token).then((res) =>
			{
				props.log(res.data)

			}).catch(error => { navigate("/contest") })
		}
		else
		{
			navigate("/contest")
		}
		// eslint-disable-next-line
		setLoading(true)
	}, []);

	return (

		<div className="App">
			<Navbar />
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path=":contest-id" element={<DashBoard />}>
					<Route path=":question-id" element={<Problem />} />
					<Route path="leaderboard" element={<LeaderBoard />} />
					<Route path="submissions" element={<MySubmission />} />
					<Route path="submissions/:submission-id" element={<MySubmission />} />
				</Route>
				<Route path="/contest" element={<ContestDashBoard />} />
				<Route element={<NotFound />} />
			</Routes>
		</div >
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