const SETTING = 'contents/SETTING';
const UPDATE = 'contents/UPDATE';
export const setting = (payload) => ({ type: SETTING, data: payload });
export const update = (payload) => ({ type: UPDATE, data: payload });
const initialState = [];

const contents = (state = initialState, action) => {
	switch (action.type) {
		case SETTING:
			return action.data;
		case UPDATE:
			return [...state, ...action.data];
		default:
			return state;
	}
};

export default contents;
