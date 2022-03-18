import {
    all, call, fork, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import apiClient from '../../api/api-client'
import {
    doGetClientSucceed, doGetClientFailed
} from '../actions/Client'

function* handleGetClient(action) {
    const { payload } = action
    try {
        const result = yield call(apiClient.findClient, payload);
        yield put(doGetClientSucceed(result))
    } catch (error) {
        yield put(doGetClientFailed(error));
    }
}



export {
    handleGetClient
}