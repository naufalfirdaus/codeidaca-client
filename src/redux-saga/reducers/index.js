import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import BootcampReducer from "./CampDetailReducer";
import BatchReducer from "./BatchReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  bootcampState: BootcampReducer,
  batchState: BatchReducer,
});

export default rootReducer;
