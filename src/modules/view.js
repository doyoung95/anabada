const VIEW = 'view/VIEW';

export const contents_click = (payload) => ({ type: VIEW, data: payload });

const initialState = [];

const view = (state = initialState, action) => {
	switch (action.type) {
		case VIEW:
			return action.data;

		default:
			return state;
	}
};

export default view;
