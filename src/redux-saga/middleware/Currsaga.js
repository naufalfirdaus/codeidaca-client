import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiCurriculum from '../../api/apiCurr';
import {
    doGetCurriculumSucceed,
    doGetCurriculumFailed,
    doGetCurriculumIdSucceed,
    doGetCurriculumIdFailed,
    doGetCurriculumTypeSucceed,
    doGetCurriculumTypeFailed


} from '../actions/Curr'

function* handleGetCurr(){
    try {
        const result = yield call(apiCurriculum.findAll);
        yield put(doGetCurriculumSucceed(result))        
    } catch (error) {
        yield put(doGetCurriculumFailed(error));
    }
}

function* handleGetType() {
    try {
        const result = yield call(apiCurriculum.findRegular);
        yield put(doGetCurriculumTypeSucceed(result)) 
    } catch (error) {
        yield put(doGetCurriculumTypeFailed(error));
    }
}

export {
    handleGetCurr,
    handleGetType
}