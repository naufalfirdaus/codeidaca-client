import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import TalentReducer from "./TalentReducer";
import TestimoniReducer from "./TestimoniReducer";
import InstructorReducer from "./InstructorReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    talentState: TalentReducer,
    testimoniState: TestimoniReducer,
    instructorState: InstructorReducer,
});

export default rootReducer;
