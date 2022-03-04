import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import TalentReducer from './TalentReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  talentState : TalentReducer
});

export default rootReducer;