export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GETCONTESTS = "CONTEST";

export const login = (userData) =>
{
	return {
		type: LOGIN,
		payload: userData
	};
}
export const Contest = (contestData) =>
{
	return {
		type: GETCONTESTS,
		payload: contestData
	};
}


// Logout / Clear Profile

export const logout = () =>
{
	return { type: LOGOUT };
};
