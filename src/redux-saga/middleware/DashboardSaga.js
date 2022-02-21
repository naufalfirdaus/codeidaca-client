import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';

import apiDashboard from '../../api/apiDashboard';
import {
    doGetSummarySucceed, 
    doGetSummaryFailed, 
    doGetJurusanSucceed, 
    doGetJurusanFailed, 
    doGetPendidikanSucceed,
    doGetPendidikanFailed,
    doGetUniversitasSucceed,
    doGetUniversitasFailed,
    doGetBoardidleSucceed,
    doGetBoardidleFailed,
    doGetInterestSucceed,
    doGetInterestFailed,
    doGetApplicantSucceed,
    doGetApplicantFailed
} from '../actions/DashboardAction';


function* handleGetSummary() {
    try {
        const result = yield call(apiDashboard.getSummary);
        yield put(doGetSummarySucceed(result))
    } catch (error) {
        yield put(doGetSummaryFailed(error));
    }
}

function* handleGetJurusan(){
    try{
        const result = yield call(apiDashboard.getJurusan)
        yield put(doGetJurusanSucceed(result))
    }catch(error){
        yield put(doGetJurusanFailed(error))
    }
}

function* handleGetPendidikan(){
    try{
        const result = yield call(apiDashboard.getPendidikan)
        yield put(doGetPendidikanSucceed(result))
    }catch(error){
        yield put(doGetPendidikanFailed(error))
    }
}

function* handleGetUniversitas(){
    try{
        const result = yield call(apiDashboard.getUniversitas)
        yield put(doGetUniversitasSucceed(result))
    }catch(error){
        yield put(doGetUniversitasFailed(error))
    }
}

function* handleGetBoardidle(){
    try{
        const result = yield call(apiDashboard.getBoardIdle)
        yield put(doGetBoardidleSucceed(result))
    }catch(error){
        yield put(doGetBoardidleFailed(error))
    }
}

function* handleGetInterest(){
    try{
        const result = yield call(apiDashboard.getInterest)
        yield put(doGetInterestSucceed(result))
    }catch(error){
        yield put(doGetInterestFailed(error))
    }
}

function* handleGetApplicant(){
    try{
        const result = yield call(apiDashboard.getApplicant)
        yield put(doGetApplicantSucceed(result))
    }catch(error){
        yield put(doGetApplicantFailed(error))
    }
}


export {
    handleGetSummary,
    handleGetJurusan,
    handleGetPendidikan,
    handleGetUniversitas,
    handleGetBoardidle,
    handleGetInterest,
    handleGetApplicant
}