const CREATE = 'contents/CREATE';

export const create = (payload) => ({ type: CREATE, data: payload });

const initialState = [];

const contents = (state = initialState, action) => {
	switch (action.type) {
		case CREATE:
			if (state.length < 1) {
				return [
					{
						key: 0,
						id: action.data.id,
						title: action.data.title,
						price: action.data.price,
						desc: action.data.desc,
					},
				];
			} else
				return [
					...state,
					{
						key: state[state.length - 1].key + 1,
						id: action.data.id,
						title: action.data.title,
						price: action.data.price,
						desc: action.data.desc,
					},
				];

		default:
			return state;
	}
};

export default contents;
