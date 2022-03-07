import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import currReducer from './CurrReducer'

const rootReducer = combineReducers({
  userState : userReducer,
  curriculumState : currReducer
});

export default rootReducer;