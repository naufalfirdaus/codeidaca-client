import * as ActionType from '../constants/TalentDetail'

export const doGetTalentDetailRequest = (payload) => ({
    type: ActionType.GET_TALENTDETAIL_REQUEST,
    payload
})

export const doGetTalentDetailSucceed = (payload) => ({
    type: ActionType.GET_TALENTDETAIL_SUCCEED,
    payload
})

export const doGetTalentDetailFailed = (payload) => ({
    type: ActionType.GET_TALENTDETAIL_FAILED,
    payload
})