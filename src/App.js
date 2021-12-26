import React, { useEffect } from "react";
import "../src/styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import NotFound from "./components/NotFound";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import Problem from "./pages/EditorPage/Problem"
import setAuthToken from "../src/authorization/utils/setAuthToken";
import store from "./store";
import { loadUser } from "../src/authorization/actions/auth";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<>
			<div className="App">
				<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						{/* <PrivateRoute exact path="/problem" component={Problem} /> */}
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/dashboardpage" component={DashBoardPage} />
						<Route exact path="/problem" component={Problem} />
						{/* <Route exact path="/contestheader" component={ContestHeader} />						 */}
						<Route exact path="" component={NotFound} />
					</Switch>
				</Router>
			</div>
		</>
	);
}

export default App;
