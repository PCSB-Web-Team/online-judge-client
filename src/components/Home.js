import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = ({ isAuthenticated }) =>
{
	if (isAuthenticated)
	{
		return <Link to="/" />;
	}

	return (
		<section className="Home">
			<div className="dark-overlay">
				<div className="Home-inner">
					<h1>PCSB</h1>
					<br />
					<div className="buttons">
						<Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Sign Up
						</Link>
						<Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};


const mapStateToProps = (state) => ({
	isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
