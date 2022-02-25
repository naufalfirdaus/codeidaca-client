import {
    all, call, fork, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import apiTalentDetail from '../../api/api-talent-detail'
import {
    doGetTalentDetailSucceed, doGetTalentDetailFailed
} from '../actions/TalentDetail'

function* handleGetTalentDetail(action) {
    const { payload } = action
    try {
        const result = yield call(apiTalentDetail.findDetail, payload);
        yield put(doGetTalentDetailSucceed(result))
    } catch (error) {
        yield put(doGetTalentDetailFailed(error));
    }
}



export {
    handleGetTalentDetail
}