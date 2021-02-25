import { combineReducers } from 'redux';
import auth from './auth';
import contents from './contents';
import view from './view';

const rootReducer = combineReducers({ auth, contents, view });

export default rootReducer;
