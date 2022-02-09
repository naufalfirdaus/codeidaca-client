import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

import apiUser from '../../api/api-user'
import {  
    doSignupSucceed,doSignupFailed,
    doSigninSucceed,doSignoutSucceed
} from '../actions/User';

function* handleSignup(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signup,payload);
        yield put(doSignupSucceed(result.data));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

function* handleSignin(action) {
    const {payload} = action;
    try {
        const result = yield call(apiUser.signin,payload);
        localStorage.setItem('@profile', JSON.stringify(result.data.profile));
        localStorage.setItem('@token', result.data.token);
        yield put(doSigninSucceed(result.data));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

function* handleSignout(action) {
    const {payload} = action;
    try {
        localStorage.clear();
        yield put(doSignoutSucceed(payload));
    } catch (error) {
        yield put(doSignupFailed(error));
    }
}

export  {
    handleSignup,
    handleSignin,
    handleSignout
}