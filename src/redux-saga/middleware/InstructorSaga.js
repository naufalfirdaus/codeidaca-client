import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";

import apiInstructor from "../../api/api-instructor";
import {
    doGetInstructorFailed,
    doGetInstructorSucceed,
} from "../actions/InstructorAction";

function* handleGetInstructor() {
    try {
        const result = yield call(apiInstructor.findAll);
        yield put(doGetInstructorSucceed(result));
    } catch (error) {
        yield put(doGetInstructorFailed(error));
    }
}

export {handleGetInstructor}
