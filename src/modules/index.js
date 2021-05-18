import { combineReducers } from 'redux';
import auth from './auth';
import contents from './contents';
import modify_data from './modify';
import current_menu from './menu';
import write_button from './write_button';
import location from './location';

const rootReducer = combineReducers({
	auth,
	contents,
	modify_data,
	current_menu,
	write_button,
	location,
});

export default rootReducer;
