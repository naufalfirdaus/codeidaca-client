import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';

import apiTalent from '../../api/apiTalent';
import {doGetTalentSucceed, doGetTalentFailed, doUpdateTalentFailed, doUpdateTalentSucceed} from '../actions/AppSettingAction'

function* handleGetTalent(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.getTalent, payload);
        yield put(doGetTalentSucceed(result))
    } catch (error) {
        yield put(doGetTalentFailed(error));
    }
}

// function* handleTalent(){
//     try{
//         const result = yield call(apiTalent.getTalent)
//         yield put(doGetTalentSucceed(result))
//     }catch(error){
//         yield put(doGetTalentFailed(error))
//     }
// }


function* handleUpdateTalent(action) {
    const {payload} = action
    try {
        const result = yield call(apiTalent.updateTalent, payload);
        yield put(doUpdateTalentSucceed(result))
    } catch (error) {
        yield put(doUpdateTalentFailed(error));
    }
}


export {
    handleGetTalent,
    handleUpdateTalent,
   // handleTalent
}