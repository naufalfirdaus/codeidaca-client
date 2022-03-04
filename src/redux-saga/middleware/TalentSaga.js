import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";

import apiTalent from "../../api/api-talent";
import { doGetTalentFailed, doGetTalentSucceed } from "../actions/TalentAction";

function* handleGetTalent() {
    try {
        const result = yield call(apiTalent.findAll);
        yield put(doGetTalentSucceed(result));
    } catch (error) {
        yield put(doGetTalentFailed(error));
    }
}

export { handleGetTalent };
