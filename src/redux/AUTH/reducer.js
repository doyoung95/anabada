import { AUTH_LOGIN, AUTH_LOGOUT } from './types';

const initialState = {
	authNow: 'logout',
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_LOGIN:
			return {
				...state,
				authNow: 'login',
			};
		case AUTH_LOGOUT:
			return {
				...state,
				authNow: 'logout',
			};

		default:
			return state;
	}
};

export default authReducer;
