import { combineReducers } from 'redux';
import authReducer from './AUTH/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
});

export default rootReducer;
