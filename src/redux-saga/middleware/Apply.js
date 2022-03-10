import {
    all, call, fork, put, takeEvery, takeLatest,
  } from 'redux-saga/effects';

  import apiApply from '../../api/apiApply'
  import { doAddApplyFailed, doAddApplySucceed } from '../actions/Apply';

  function* handleAddApply(action){
    const {payload} = action; 
    try {
          const result = yield call(apiApply.createApply,payload)
          yield put(doAddApplySucceed(result.data))
      } catch (error) {
          yield put(doAddApplyFailed(error))
      }
  }

  export {
      handleAddApply
  }