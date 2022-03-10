import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeAdd from '../constants/Apply'

import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import {handleAddApply} from './Apply'

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeAdd.ADD_APPLY_REQUEST, handleAddApply)
  ])
}

export default watchAll;


