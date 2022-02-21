import * as ActionType from '../constants/AppSettingConstant';

export const doUpdateTalentRequest = (payload) => ({
    type: ActionType.UPDATE_TALENT_REQUEST,
    payload
})

export const doUpdateTalentSucceed = (payload) => ({
    type: ActionType.UPDATE_TALENT_SUCCEED,
    payload
})

export const doUpdateTalentFailed = (payload) => ({
    type: ActionType.UPDATE_TALENT_FAILED,
    payload
})

export const doGetTalentRequest =(payload)=>({
    type : ActionType.GET_TALENT_REQUEST,
    payload
})

export const doGetTalentSucceed =(payload)=>({
    type : ActionType.GET_TALENT_SUCCEED,
    payload
})

export const doGetTalentFailed =(payload)=>({
    type : ActionType.GET_TALENT_FAILED,
    payload
})