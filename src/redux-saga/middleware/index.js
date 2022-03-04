import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeTalentDetail from '../constants/TalentDetail'
import * as ActionTypeClient from '../constants/Client'
import * as ActionTypePlace from '../constants/Placement'

import { handleSignup, handleSignin, handleSignout } from './UserSaga'
import { handleGetTalentDetail } from './TalentDetailSaga'
import { handleGetClient } from './ClientSaga'
import { handleAddPlaceStatus, handleSwitchIdleStatus } from './PlacementSaga'


function* watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

    takeEvery(ActionTypeTalentDetail.GET_TALENTDETAIL_REQUEST, handleGetTalentDetail),

    takeEvery(ActionTypeClient.GET_CLIENT_REQUEST, handleGetClient),

    takeEvery(ActionTypePlace.ADD_PLACE_REQUEST, handleAddPlaceStatus),
    takeEvery(ActionTypePlace.SWITCH_IDLE_REQUEST, handleSwitchIdleStatus),

  ])
}

export default watchAll;


