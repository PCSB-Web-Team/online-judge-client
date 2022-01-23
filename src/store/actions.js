export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const USERSUBMISSION = "USERSUBMISSION";

export const login = (userData) => {
	return {
		type: LOGIN,
		payload: userData
	};
}
export const Contest = (userSubmission) => {
	return {
		type: USERSUBMISSION,
		payload: userSubmission
	};
}

// Logout / Clear Profile

export const logout = () => {
	return { type: LOGOUT };
};
