import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import contents from './contents';

const rootReducer = combineReducers({ user, auth, contents });

export default rootReducer;
