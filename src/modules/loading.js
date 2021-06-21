const LOADING = 'loading/LOADING';
const LOADED = 'loading/LOADED';

export const page_loading = () => ({ type: LOADING });
export const page_loaded = () => ({ type: LOADED });

const initialState = false;

const loading = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return true;
		case LOADED:
			return false;
		default:
			return state;
	}
};
export default loading;
