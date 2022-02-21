import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import DashboardReducer from './DashboardReducer';
import AppSettingReducer from './AppSettingReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  dashboardState : DashboardReducer,
  talentState : AppSettingReducer
});

export default rootReducer;