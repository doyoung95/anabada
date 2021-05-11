const MODIFY = 'content/MODIFY';
const MODIFY_CANCEL = 'contents/MODIFY_CANCEL';
export const modify = (payload) => ({ type: MODIFY, data: payload });
export const modify_cancel = (payload) => ({
	type: MODIFY_CANCEL,
	data: payload,
});

const initialState = [
	false,
	{ title: '', price: '', contents: '', detailImg: '' },
	0,
];

const modify_data = (state = initialState, action) => {
	switch (action.type) {
		case MODIFY:
			return action.data;
		case MODIFY_CANCEL:
			return initialState;
		default:
			return state;
	}
};

export default modify_data;
