import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeTalent from "../constants/TalentConstant";
import * as ActionTypeTestimoni from "../constants/TestimoniConstant";
import * as ActionTypeInstructor from "../constants/InstructorConstant";

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import { handleGetTalent } from "./TalentSaga";
import { handleGetTestimoni } from "./TestimoniSaga";
import { handleGetInstructor } from "./InstructorSaga";

function* watchAll() {
    yield all([
        takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
        takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
        takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
        takeEvery(ActionTypeTalent.GET_TALENT_REQUEST, handleGetTalent),
        takeEvery(
            ActionTypeTestimoni.GET_TESTIMONI_REQUEST,
            handleGetTestimoni
        ),
        takeEvery(
            ActionTypeInstructor.GET_INSTRUCTOR_REQUEST,
            handleGetInstructor
        ),
    ]);
}

export default watchAll;
