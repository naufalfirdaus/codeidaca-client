import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeDashboard from '../constants/DashboardConstant'
import * as ActionTypeTalent from '../constants/AppSettingConstant'

import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import {handleGetApplicant, handleGetBoardidle, handleGetInterest, handleGetJurusan, handleGetPendidikan, handleGetSummary, handleGetUniversitas} from './DashboardSaga'
import {handleGetTalent, handleUpdateTalent, handleUpdateTalentNoFile} from './AppSettingSaga'

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeDashboard.GET_SUMMARY_REQUEST, handleGetSummary),
    takeEvery(ActionTypeDashboard.GET_JURUSAN_REQUEST, handleGetJurusan),
    takeEvery(ActionTypeDashboard.GET_PENDIDIKAN_REQUEST, handleGetPendidikan),
    takeEvery(ActionTypeDashboard.GET_UNIVERSITAS_REQUEST, handleGetUniversitas),
    takeEvery(ActionTypeDashboard.GET_BOARDIDLE_REQUEST, handleGetBoardidle),
    takeEvery(ActionTypeDashboard.GET_INTEREST_REQUEST, handleGetInterest),
    takeEvery(ActionTypeDashboard.GET_APPLICANT_REQUEST, handleGetApplicant),
    takeEvery(ActionTypeTalent.GET_TALENT_REQUEST, handleGetTalent),
    takeEvery(ActionTypeTalent.UPDATE_TALENT_REQUEST, handleUpdateTalent),
    takeEvery(ActionTypeTalent.UPDATE_TALENTNOFILE_REQUEST, handleUpdateTalentNoFile)
  ])
}

export default watchAll;


