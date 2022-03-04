import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import TalentDetailReducer from './TalentDetailReducer';
import ClientReducer from './ClientReducer';
import PlacementReducer from './PlacementReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  talentDetailState: TalentDetailReducer,
  clientState: ClientReducer,
  placeState: PlacementReducer
});

export default rootReducer;