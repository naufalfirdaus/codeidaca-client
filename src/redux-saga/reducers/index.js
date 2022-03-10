import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import applyReducer from './Apply';

const rootReducer = combineReducers({
  userState : userReducer,
  applyState : applyReducer
});

export default rootReducer;