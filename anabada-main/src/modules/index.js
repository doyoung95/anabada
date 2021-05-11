import { combineReducers } from 'redux';
import auth from './auth';
import contents from './contents';
import modify_data from './modify';
import current_menu from './menu';

const rootReducer = combineReducers({
	auth,
	contents,
	modify_data,
	current_menu,
});

export default rootReducer;
