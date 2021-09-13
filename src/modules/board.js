const SETTING = 'board/SETTING';
const UPDATE = 'board/UPDATE';

export const setting = (payload) => ({ type: SETTING, data: payload });
export const update = (payload) => ({ type: UPDATE, data: payload });

const initialState = [];

const board = (state = initialState, action) => {
	switch (action.type) {
		case SETTING:
			return action.data;
		case UPDATE:
			return [...state, ...action.data];
		default:
			return initialState;
	}
};

export default board;
