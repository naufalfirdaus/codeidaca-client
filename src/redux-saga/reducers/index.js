import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import currReducer from './CurrReducer'
import TalentDetailReducer from './TalentDetailReducer';
import ClientReducer from './ClientReducer';
import PlacementReducer from './PlacementReducer';
import DashboardReducer from './DashboardReducer';
import AppSettingReducer from './AppSettingReducer';
import applyReducer from './Apply';
import TalentReducer from "./TalentReducer";
import TestimoniReducer from "./TestimoniReducer";
import InstructorReducer from "./InstructorReducer";
import BootcampReducer from "./CampDetailReducer";
import BatchReducer from "./BatchReducer";
import AppBatchReducer from './AppBatchReducer';
import AppCandidatReducer from './AppCandidatReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  curriculumState : currReducer,
  talentDetailState: TalentDetailReducer,
  clientState: ClientReducer,
  placeState: PlacementReducer,
  dashboardState : DashboardReducer,
  talentState : AppSettingReducer,
  applyState : applyReducer,
  talentState: TalentReducer,
  testimoniState: TestimoniReducer,
  instructorState: InstructorReducer,
  bootcampState: BootcampReducer,
  batchState: BatchReducer,
  batchAppState : AppBatchReducer,
  candidatState : AppCandidatReducer
});

export default rootReducer;