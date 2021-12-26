import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.css";
import App from "./App";
//Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
