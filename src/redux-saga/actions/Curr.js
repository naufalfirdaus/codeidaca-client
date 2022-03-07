import * as ActionType from '../constants/Curr'

export const doGetCurriculumRequest =()=>({
    type : ActionType.GET_CURRICULUM_REQUEST
})

export const doGetCurriculumSucceed =(payload)=>({
    type : ActionType.GET_CURRICULUM_SUCCEED,
    payload
})

export const doGetCurriculumFailed =(payload)=>({
    type : ActionType.GET_CURRICULUM_FAILED,
    payload
})

export const doGetCurriculumIdRequest =(payload)=>({
    type : ActionType.GET_CURRICULUM_ID_REQUEST,
    payload
})

export const doGetCurriculumIdSucceed =(payload)=>({
    type : ActionType.GET_CURRICULUM_ID_SUCCEED,
    payload
})

export const doGetCurriculumIdFailed =(payload)=>({
    type : ActionType.GET_CURRICULUM_ID_FAILED,
    payload
})

export const doGetCurriculumTypeRequest =(payload)=>({
    type : ActionType.GET_CURRICULUM_TYPE_REQUEST,
    payload
})

export const doGetCurriculumTypeSucceed =(payload)=>({
    type : ActionType.GET_CURRICULUM_TYPE_SUCCEED,
    payload
})

export const doGetCurriculumTypeFailed =(payload)=>({
    type : ActionType.GET_CURRICULUM_TYPE_FAILED,
    payload
})