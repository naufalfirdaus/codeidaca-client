import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import currReducer from './CurrReducer'
import testiReducer from './ReviewReducer'

const rootReducer = combineReducers({
  userState : userReducer,
  curriculumState : currReducer,
  reviewState : testiReducer
});

export default rootReducer;