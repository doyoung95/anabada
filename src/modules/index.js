import { combineReducers } from 'redux';
import auth from './auth';
import modify_data from './modify';
import current_menu from './menu';
import location from './location';
import loading from './loading';
import board from './board';

const rootReducer = combineReducers({
	auth,
	modify_data,
	current_menu,
	location,
	loading,
	board,
});

export default rootReducer;
