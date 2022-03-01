import * as ActionType from '../constants/Curr'

export const curriculumRequest =()=>({
    type : ActionType.curriculumRequest
})

export const curriculumSucceed =(payload)=>({
    type : ActionType.curriculumSucceed,
    payload
})

export const curriculumFailed =(payload)=>({
    type : ActionType.curriculumFailed,
    payload
})