import { combineReducers } from 'redux';
import AppBatchReducer from './AppBatchReducer';
import AppCandidatReducer from './AppCandidatReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  userState : userReducer,
  batchState : AppBatchReducer,
  candidatState : AppCandidatReducer
});

export default rootReducer;