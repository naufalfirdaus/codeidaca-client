import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";

import apiTestimoni from "../../api/apiTesti";

import {
    doGetTestimoniFailed,
    doGetTestimoniSucceed,
} from "../actions/Review";

function* handleGetTestimoni() {
    try {
        const result = yield call(apiTestimoni.findBySql);
        yield put(doGetTestimoniSucceed(result));
    } catch (error) {
        yield put(doGetTestimoniFailed(error));
    }
}

export { handleGetTestimoni };