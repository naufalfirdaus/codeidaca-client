import * as ActionType from '../constants/Curr'

export const curriculumRequest =()=>({
    type : ActionType.curriculum_REQUEST
})

export const curriculumSucceed =(payload)=>({
    type : ActionType.curriculum_SUCCEED,
    payload
})

export const curriculumFailed =(payload)=>({
    type : ActionType.curriculum_FAILED,
    payload
})