import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiAppBatch from '../../api/api-app-batch';
import {
    doGetBatchSucceed,
    doGetBatchFailed,
    doEditBatchSucceed,
    doEditBatchFailed,
    doDeleteBatchSucceed,
    doDeleteBatchFailed
} from '../actions/AppBatch'

function* handleGetBatch(){
    try {
        const result = yield call(apiAppBatch.batchList);
        yield put(doGetBatchSucceed(result))        
    } catch (error) {
        yield put(doGetBatchFailed(error));
    }
}

function* handleEditBatchStatus(action) {
    const {payload} = action;
    try {
        yield call(apiAppBatch.updateBatchStatus,payload);
        const result = yield call(apiAppBatch.batchList);
        yield put(doEditBatchSucceed(result));
    } catch (error) {
        yield put(doEditBatchFailed(error));
    }
}

function* handleDeleteBatch(action) {
    const {payload} = action;
    try {
        const result = yield call(apiAppBatch.deleteRow,payload);
        yield put(doDeleteBatchSucceed(payload));
    } catch (error) {
        yield put(doDeleteBatchFailed(error));
    }
}


export {
    handleGetBatch,
    handleEditBatchStatus,
    handleDeleteBatch
}