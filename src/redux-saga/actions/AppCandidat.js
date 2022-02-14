import * as ActionType from '../constants/AppCandidat'

export const doGetCandidatRequest =()=>({
    type : ActionType.GET_CANDIDAT_REQUEST
})

export const doGetCandidatSucceed =(payload)=>({
    type : ActionType.GET_CANDIDAT_SUCCEED,
    payload
})

export const doGetCandidatFailed =(payload)=>({
    type : ActionType.GET_CANDIDAT_FAILED,
    payload
})

export const doEditCandidatStatusRequest = (payload) => ({
    type: ActionType.EDIT_CANDIDAT_STATUS_REQUEST,
    payload,
});

export const doEditCandidatStatusSucceed = (payload) => ({
    type: ActionType.EDIT_CANDIDAT_STATUS_SUCCEED ,
    payload,
});

export const doEditCandidatStatusFailed = (payload) => ({
    type: ActionType.EDIT_CANDIDAT_STATUS_FAILED ,
    payload,
});
