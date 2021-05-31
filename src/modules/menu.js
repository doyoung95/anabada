const CHANGE = 'menu/CHANGE';

export const menu_change = (payload) => ({ type: CHANGE, data: payload });

const initialState = 0;

const current_menu = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE:
			localStorage.current_menu = action.data;
			return action.data;
		default:
			if (localStorage.current_menu) {
				return Number(localStorage.current_menu);
			}
			return state;
	}
};

export default current_menu;
