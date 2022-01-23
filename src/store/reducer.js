import {
LOGIN,
LOGOUT,
USERSUBMISSION,
} from "./actions";

const initialState = {
	token: localStorage.getItem("pcsb-oj-token"),
	isAuthenticated: false,
	userData: null,
	contestData: null,
};

export default function auth(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN: {
			return {
				...state,
				isAuthenticated: true,
				userData: payload,
			}
		}
		case USERSUBMISSION: {
			return {
				...state,
				isAuthenticated: true,
				contestData: payload,
			}
		}
		case LOGOUT: {
			localStorage.removeItem("pcsb-oj-token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				userData: null,
			};
		}
		default:
			return state;
	}
}
