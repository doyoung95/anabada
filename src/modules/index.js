import { combineReducers } from 'redux';
import auth from './auth';
import modify_data from './modify';
import current_menu from './menu';
import write_button from './write_button';
import location from './location';
import loading from './loading';

const rootReducer = combineReducers({
	auth,
	modify_data,
	current_menu,
	write_button,
	location,
	loading,
});

export default rootReducer;
