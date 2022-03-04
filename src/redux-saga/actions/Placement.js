import * as ActionType from '../constants/Placement'

export const doAddPlaceRequest = (payload) => ({
    type: ActionType.ADD_PLACE_REQUEST,
    payload,
});

export const doAddPlaceSucceed = (payload) => ({
    type: ActionType.ADD_PLACE_SUCCEED,
    payload,
});

export const doAddPlaceFailed = (payload) => ({
    type: ActionType.ADD_PLACE_FAILED,
    payload,
});
export const doSwitchIdleRequest = (payload) => ({
    type: ActionType.SWITCH_IDLE_REQUEST,
    payload,
});

export const doSwitchIdleSucceed = (payload) => ({
    type: ActionType.SWITCH_IDLE_SUCCEED,
    payload,
});

export const doSwitchIdleFailed = (payload) => ({
    type: ActionType.SWITCH_IDLE_FAILED,
    payload,
});
