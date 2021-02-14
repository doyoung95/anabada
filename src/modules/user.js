const REGISTER = 'user/RESISTER';

export const register = (payload) => ({ type: REGISTER, data: payload });

const initialState = [];

const user = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER:
			if (state.length < 1) {
				return [
					{
						key: 0,
						id: action.data.id,
						password: action.data.password,
					},
				];
			} else
				return [
					...state,
					{
						key: state[state.length - 1].key + 1,
						id: action.data.id,
						password: action.data.password,
					},
				];

		default:
			return state;
	}
};

export default user;
