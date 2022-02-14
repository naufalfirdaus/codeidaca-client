import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeUser from '../constants/User';
import * as ActionTypeBatch from '../constants/AppBatch'
import * as ActionTypeCandidat from '../constants/AppCandidat'

import {handleSignup,handleSignin,handleSignout} from './UserSaga'
import {handleGetBatch, handleEditBatchStatus, handleDeleteBatch} from './AppBatchSaga'
import { handleEditCandidatStatus, handleGetCandidat } from './AppCandidatSaga';

function *watchAll() {
  yield all([
    takeEvery(ActionTypeUser.ADD_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeUser.GET_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.GET_SIGNOUT_REQUEST, handleSignout),

    takeEvery(ActionTypeBatch.GET_BATCH_REQUEST, handleGetBatch),
    takeEvery(ActionTypeBatch.EDIT_BATCH_STATUS_REQUEST, handleEditBatchStatus),
    takeEvery(ActionTypeBatch.DELETE_BATCH_REQUEST, handleDeleteBatch),

    takeEvery(ActionTypeCandidat.GET_CANDIDAT_REQUEST, handleGetCandidat),
    takeEvery(ActionTypeCandidat.EDIT_CANDIDAT_STATUS_REQUEST, handleEditCandidatStatus),
  ])
}

export default watchAll;


