import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiAppCandidat from '../../api/api-app-candidat';
import {
    doGetCandidatSucceed,
    doGetCandidatFailed,
    doEditCandidatStatusSucceed,
    doEditCandidatStatusFailed,
} from '../actions/AppCandidat'

function* handleGetCandidat(){
    try {
        const result = yield call(apiAppCandidat.candidateList);
        yield put(doGetCandidatSucceed(result))        
    } catch (error) {
        yield put(doGetCandidatFailed(error));
    }
}

function* handleEditCandidatStatus(action) {
    const {payload} = action;
    try {
        yield call(apiAppCandidat.updateCandidateStatus,payload);
        const result = yield call(apiAppCandidat.candidateList);
        yield put(doEditCandidatStatusSucceed(result));
    } catch (error) {
        yield put(doEditCandidatStatusFailed(error));
    }
}



export {
    handleGetCandidat,
    handleEditCandidatStatus
}