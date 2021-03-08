import { combineReducers } from 'redux';
import auth from './auth';
import contents from './contents';

const rootReducer = combineReducers({ auth, contents });

export default rootReducer;
