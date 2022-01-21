import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, logout } from "../store/actions";

const Navbar = (props) =>
{
	function logout()
	{
		props.logout();
		localStorage.removeItem("pcsb-oj-token")
	}
	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">HOME</Link>
			</h1>
			{props.isAuthenticated ? null :
				<ul className="nav-links">
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			}

			{props.isAuthenticated ? (
				<ul className="nav-links">
					<li>
						<Link to={`/contest/:${props.id}`}>
							<span className="hide-sm">DashBoard</span>
						</Link>
					</li>

					<li>
						<Link to="/mySubmission">
							<span className="hide-sm">My Submission</span>
						</Link>
					</li>
					<li>
						<Link to="/leaderboard">
							<span className="hide-sm">LeaderBoard</span>
						</Link>
					</li>
					<li>
						<Link onClick={logout} to="/" replace>
							<i className="fas fa-sign-out-alt"></i>{" "}
							<span className="hide-sm"> &nbsp;Logout</span>
						</Link>
					</li>
				</ul>
			) : null}

		</nav>
	);
};



function mapStateToProps(state)
{
	return {
		isAuthenticated: state.isAuthenticated
	}
}
function mapActionToProps(dispatch)
{
	return {
		login: () => dispatch(login()),
		logout: () => dispatch(logout()),
	}
}

export default connect(mapStateToProps, mapActionToProps)(Navbar);