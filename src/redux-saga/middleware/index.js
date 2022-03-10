import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeCurr from '../constants/Curr'
import * as ActionTypeTestimoni from "../constants/Review";
import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import { handleGetCurr, handleGetType} from './Currsaga'
import { handleGetTestimoni } from "./ReviewSaga";

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery( ActionTypeTestimoni.GET_TESTIMONI_REQUEST,handleGetTestimoni),
    takeEvery(ActionTypeCurr.GET_CURRICULUM_TYPE_REQUEST, handleGetType),
    takeEvery(ActionTypeCurr.GET_CURRICULUM_REQUEST, handleGetCurr),
  ]);
}

export default watchAll;
