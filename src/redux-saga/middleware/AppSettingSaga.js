import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';

import apiTalent from '../../api/apiTalent';
import {doGetTalentSucceed, doGetTalentFailed, doUpdateTalentFailed, doUpdateTalentSucceed, doUpdateTalentNoFileSucceed, doUpdateTalentNoFileFailed} from '../actions/AppSettingAction'

function* handleGetTalent(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.getTalent, payload);
        yield put(doGetTalentSucceed(result))
    } catch (error) {
        yield put(doGetTalentFailed(error));
    }
}


function* handleUpdateTalent(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.updateTalent, payload);
        yield put(doUpdateTalentSucceed(result.data))
    } catch (error) {
        yield put(doUpdateTalentFailed(error));
    }
}

function* handleUpdateTalentNoFile(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.updateTalentNoFile, payload);
        yield put(doUpdateTalentNoFileSucceed(result.data))
    } catch (error) {
        yield put(doUpdateTalentNoFileFailed(error));
    }
}


export {
    handleGetTalent,
    handleUpdateTalent,
    handleUpdateTalentNoFile
   // handleTalent
}