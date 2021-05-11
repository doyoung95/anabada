import { combineReducers } from 'redux';
import auth from './auth';
import contents from './contents';
import modify_data from './modify';

const rootReducer = combineReducers({ auth, contents, modify_data });

export default rootReducer;
