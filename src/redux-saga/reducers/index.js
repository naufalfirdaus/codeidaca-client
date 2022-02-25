import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import TalentDetailReducer from './TalentDetailReducer';
import ClientReducer from './ClientReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  talentDetailState: TalentDetailReducer,
  clientState: ClientReducer
});

export default rootReducer;