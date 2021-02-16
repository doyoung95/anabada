import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import contents from './contents';
import view from './view';

const rootReducer = combineReducers({ user, auth, contents, view });

export default rootReducer;
