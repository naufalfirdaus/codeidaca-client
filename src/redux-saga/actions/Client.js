import * as ActionType from '../constants/Client'

export const doGetClientRequest = (payload) => ({
    type: ActionType.GET_CLIENT_REQUEST,
    payload
})

export const doGetClientSucceed = (payload) => ({
    type: ActionType.GET_CLIENT_SUCCEED,
    payload
})

export const doGetClientFailed = (payload) => ({
    type: ActionType.GET_CLIENT_FAILED,
    payload
})