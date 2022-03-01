import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUser from "../constants/User";
import * as ActionTypeBootcamp from "../constants/CampDetailConstant";
import { handleGetBootcamp } from "./CampDetailSaga";
import * as ActionTypeBatch from "../constants/BatchConstant";
import { handleGetBatch,handleAddBatch } from "./BatchSaga";
import { handleSignup, handleSignin, handleSignout } from "./UserSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_REQUEST, handleGetBootcamp),
    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.ADD_BATCH_REQUEST,handleAddBatch),
  ]);
}

export default watchAll;
