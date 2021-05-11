const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

export const login = (payload) => ({ type: LOGIN, data: payload });
export const logout = (payload) => ({ type: LOGOUT, data: payload });

const initialState = [];

const auth = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return action.data;
		case LOGOUT:
			return [];
		default:
			return state;
	}
};

export default auth;
