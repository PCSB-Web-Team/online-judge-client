export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


export const login = (userData) =>
{
	return {
		type: LOGIN,
		payload: userData
	};
}


// Logout / Clear Profile

export const logout = () =>
{
	return { type: LOGOUT };
};
