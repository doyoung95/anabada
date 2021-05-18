const CHANGE = 'menu/CHANGE';

export const menu_change = (payload) => ({ type: CHANGE, data: payload });

const initialState = 0;

const current_menu = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE:
			return action.data;
		default:
			return state;
	}
};

export default current_menu;
