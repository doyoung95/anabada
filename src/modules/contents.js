const SETTING = 'contents/SETTING';

export const setting = (payload) => ({ type: SETTING, data: payload });

const initialState = [];

const contents = (state = initialState, action) => {
	switch (action.type) {
		case SETTING:
			return action.data;

		default:
			return state;
	}
};

export default contents;
