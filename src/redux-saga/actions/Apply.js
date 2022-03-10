import * as ActionType from '../constants/Apply'

export const doAddApplyRequest =(payload)=>({
    type : ActionType.ADD_APPLY_REQUEST,
    payload
})

export const doAddApplySucceed =(payload)=>({
    type : ActionType.ADD_APPLY_SUCCEED,
    payload
})

export const doAddApplyFailed =(payload)=>({
    type : ActionType.ADD_APPLY_FAILED,
    payload
})