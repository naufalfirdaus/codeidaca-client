import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeTalentDetail from '../constants/TalentDetail'
import * as ActionTypeClient from '../constants/Client'

import { handleSignup, handleSignin, handleSignout } from './UserSaga'
import { handleGetTalentDetail } from './TalentDetailSaga'
import { handleGetClient } from './ClientSaga'

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

    takeEvery(ActionTypeTalentDetail.GET_TALENTDETAIL_REQUEST, handleGetTalentDetail),

    takeEvery(ActionTypeClient.GET_CLIENT_REQUEST, handleGetClient)
  ])
}

export default watchAll;


