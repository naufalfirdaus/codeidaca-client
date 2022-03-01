import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiCurriculum from '../../api/apiCurr';
import {
    curriculumSucceed,
    curriculumFailed
} from '../actions/Curr'

function* handleGetCurr(){
    try {
        const result = yield call(apiCurriculum.findAll);
        yield put(curriculumSucceed(result))        
    } catch (error) {
        yield put(curriculumFailed(error));
    }
}


export {
    handleGetCurr
}