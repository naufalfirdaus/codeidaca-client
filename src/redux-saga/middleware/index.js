import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeCurr from '../constants/Curr'
import * as ActionTypeTestimoni from "../constants/Review";
import * as ActionTypeBootcamp from "../constants/CampDetailConstant";
import { handleGetBootcamp } from "./CampDetailSaga";
import * as ActionTypeBatch from "../constants/BatchConstant";
import { handleGetBatch,handleAddBatch } from "./BatchSaga";
import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import { handleGetCurr, handleGetType} from './Currsaga'
import { handleGetTestimoni } from "./ReviewSaga";
import * as ActionTypeDashboard from '../constants/DashboardConstant'
import * as ActionTypeTalent from '../constants/AppSettingConstant'
import {handleGetApplicant, handleGetBoardidle, handleGetInterest, handleGetJurusan, handleGetPendidikan, handleGetSummary, handleGetUniversitas} from './DashboardSaga'
import {handleGetTalent, handleUpdateTalent, handleUpdateTalentNoFile} from './AppSettingSaga'
import * as ActionTypeAdd from '../constants/Apply'
import {handleAddApply} from './Apply'
import * as ActionTypeTalentDetail from '../constants/TalentDetail'
import * as ActionTypeClient from '../constants/Client'
import * as ActionTypePlace from '../constants/Placement'
import { handleGetTalentDetail } from './TalentDetailSaga'
import { handleGetClient } from './ClientSaga'
import { handleAddPlaceStatus, handleSwitchIdleStatus } from './PlacementSaga'
import * as ActionTypeTalentSaga from "../constants/TalentConstant";
import * as ActionTypeTestimoniSaga from "../constants/TestimoniConstant";
import * as ActionTypeInstructor from "../constants/InstructorConstant";
import { handleGetTalentSaga } from "./TalentSaga";
import { handleGetTestimoniSaga } from "./TestimoniSaga";
import { handleGetInstructor } from "./InstructorSaga";
import * as ActionTypeAppBatch from '../constants/AppBatch'
import * as ActionTypeAppCandidat from '../constants/AppCandidat'
import {handleGetAppBatch, handleEditBatchStatus, handleDeleteBatch, handleGetBatchId, handleEditBatch} from './AppBatchSaga'
import { handleEditCandidatStatus, handleGetCandidat } from './AppCandidatSaga';

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),
    takeEvery( ActionTypeTestimoni.GET_TESTIMONI_REQUEST,handleGetTestimoni),
    takeEvery(ActionTypeCurr.GET_CURRICULUM_REQUEST, handleGetCurr),
    takeEvery(ActionTypeAdd.ADD_APPLY_REQUEST, handleAddApply),
    takeEvery(ActionTypeDashboard.GET_SUMMARY_REQUEST, handleGetSummary),
    takeEvery(ActionTypeDashboard.GET_JURUSAN_REQUEST, handleGetJurusan),
    takeEvery(ActionTypeDashboard.GET_PENDIDIKAN_REQUEST, handleGetPendidikan),
    takeEvery(ActionTypeDashboard.GET_UNIVERSITAS_REQUEST, handleGetUniversitas),
    takeEvery(ActionTypeDashboard.GET_BOARDIDLE_REQUEST, handleGetBoardidle),
    takeEvery(ActionTypeDashboard.GET_INTEREST_REQUEST, handleGetInterest),
    takeEvery(ActionTypeDashboard.GET_APPLICANT_REQUEST, handleGetApplicant),
    takeEvery(ActionTypeTalent.GET_TALENT_REQUEST, handleGetTalent),
    takeEvery(ActionTypeTalent.UPDATE_TALENT_REQUEST, handleUpdateTalent),
    takeEvery(ActionTypeTalent.UPDATE_TALENTNOFILE_REQUEST, handleUpdateTalentNoFile),
    takeEvery(ActionTypeTalentDetail.GET_TALENTDETAIL_REQUEST, handleGetTalentDetail),
    takeEvery(ActionTypeClient.GET_CLIENT_REQUEST, handleGetClient),
    takeEvery(ActionTypePlace.ADD_PLACE_REQUEST, handleAddPlaceStatus),
    takeEvery(ActionTypePlace.SWITCH_IDLE_REQUEST, handleSwitchIdleStatus),
    takeEvery(ActionTypeTalentSaga.GET_TALENT_REQUEST, handleGetTalentSaga),
    takeEvery(
        ActionTypeTestimoniSaga.GET_TESTIMONI_REQUEST,
        handleGetTestimoniSaga
    ),
    takeEvery(
        ActionTypeInstructor.GET_INSTRUCTOR_REQUEST,
        handleGetInstructor
    ),
    takeEvery(ActionTypeBootcamp.GET_BOOTCAMP_REQUEST, handleGetBootcamp),
    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.ADD_BATCH_REQUEST,handleAddBatch),

    takeEvery(ActionTypeAppBatch.GET_BATCH_REQUEST, handleGetAppBatch),
    takeEvery(ActionTypeAppBatch.EDIT_BATCH_STATUS_REQUEST, handleEditBatchStatus),
    takeEvery(ActionTypeAppBatch.DELETE_BATCH_REQUEST, handleDeleteBatch),
    takeEvery(ActionTypeAppBatch.GET_BATCH_ID_REQUEST, handleGetBatchId),
    takeEvery(ActionTypeAppBatch.EDIT_BATCH_REQUEST, handleEditBatch),

    takeEvery(ActionTypeAppCandidat.GET_CANDIDAT_REQUEST, handleGetCandidat),
    takeEvery(ActionTypeAppCandidat.EDIT_CANDIDAT_STATUS_REQUEST, handleEditCandidatStatus),

  ]);
}

export default watchAll;