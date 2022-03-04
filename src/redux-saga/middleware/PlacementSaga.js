import {
    all, call, fork, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import apiPlacement from '../../api/api-placement';
import {
    doAddPlaceSucceed,
    doAddPlaceFailed,
    doSwitchIdleSucceed,
    doSwitchIdleFailed,
} from '../actions/Placement'


function* handleAddPlaceStatus(action) {
    const { payload } = action;
    try {
        const result = yield call(apiPlacement.createPlace, payload);
        yield put(doAddPlaceSucceed(result.data));
    } catch (error) {
        yield put(doAddPlaceFailed(error));
    }
}

function* handleSwitchIdleStatus(action) {
    const { payload } = action;
    try {
        const result = yield call(apiPlacement.switchIdle, payload);
        yield put(doSwitchIdleSucceed(result.data));
    } catch (error) {
        yield put(doSwitchIdleFailed(error));
    }
}

export {
    handleAddPlaceStatus,
    handleSwitchIdleStatus
}