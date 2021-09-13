const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

export const user_login = (payload) => ({ type: LOGIN, data: payload });
export const user_logout = (payload) => ({ type: LOGOUT, data: payload });

const initialState = { isAuth: false, data: { id: '', uid: '', nickname: '' } };
const auth = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return { isAuth: true, data: action.data };
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default auth;
