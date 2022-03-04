import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeTalent from "../constants/TalentConstant";

import { handleSignup, handleSignin, handleSignout } from "./UserSaga";
import { handleGetTalent } from "./TalentSaga";

function* watchAll() {
    yield all([
        takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
        takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
        takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
        takeEvery(ActionTypeTalent.GET_TALENT_REQUEST, handleGetTalent),
    ]);
}

export default watchAll;
