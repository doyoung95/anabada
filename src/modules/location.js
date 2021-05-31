const SET_LOCATION = 'location/SET_LOCATION';

export const set_location = (payload) => ({
	type: SET_LOCATION,
	data: payload,
});

const initialState = {
	locationX: 0,
	locationY: 0,
	first: '',
	second: '위치정보 없음',
	third: '',
};

const location = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOCATION:
			return action.data;
		default:
			return state;
	}
};

export default location;
