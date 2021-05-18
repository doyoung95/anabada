const CLICK = 'write/CLICK';

export const click = (payload) => ({ type: CLICK, data: payload });

const initialState = false;

const write_button = (state = initialState, action) => {
	switch (action.type) {
		case CLICK:
			return action.data;
		default:
			return state;
	}
};

export default write_button;
