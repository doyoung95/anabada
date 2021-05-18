const SET_LOCATION = 'location/SET_LOCATION';

export const set_location = (payload) => ({
	type: SET_LOCATION,
	data: payload,
});

const initialState = {
	locationX: 37.5642135,
	locationY: 127.0016985,
	first: '',
	second: '서울특별시',
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
