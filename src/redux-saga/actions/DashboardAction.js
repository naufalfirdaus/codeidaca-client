import * as ActionType from '../constants/DashboardConstant';

export const doGetSummaryRequest = () => ({
    type: ActionType.GET_SUMMARY_REQUEST
})

export const doGetSummarySucceed = (payload) => ({
    type: ActionType.GET_SUMMARY_SUCCEED,
    payload
})

export const doGetSummaryFailed = (payload) => ({
    type: ActionType.GET_SUMMARY_FAILED,
    payload
})

export const doGetJurusanRequest = () => ({
    type: ActionType.GET_JURUSAN_REQUEST
})

export const doGetJurusanSucceed = (payload) => ({
    type: ActionType.GET_JURUSAN_SUCCEED,
    payload
})

export const doGetJurusanFailed = (payload) => ({
    type: ActionType.GET_JURUSAN_FAILED,
    payload
})

export const doGetPendidikanRequest = () => ({
    type: ActionType.GET_PENDIDIKAN_REQUEST
})

export const doGetPendidikanSucceed = (payload) => ({
    type: ActionType.GET_PENDIDIKAN_SUCCEED,
    payload
})

export const doGetPendidikanFailed = (payload) => ({
    type: ActionType.GET_PENDIDIKAN_FAILED,
    payload
})

export const doGetUniversitasRequest = () => ({
    type: ActionType.GET_UNIVERSITAS_REQUEST
})

export const doGetUniversitasSucceed = (payload) => ({
    type: ActionType.GET_UNIVERSITAS_SUCCEED,
    payload
})

export const doGetUniversitasFailed = (payload) => ({
    type: ActionType.GET_UNIVERSITAS_FAILED,
    payload
})

export const doGetBoardidleRequest = () => ({
    type: ActionType.GET_BOARDIDLE_REQUEST
})

export const doGetBoardidleSucceed = (payload) => ({
    type: ActionType.GET_BOARDIDLE_SUCCEED,
    payload
})

export const doGetBoardidleFailed = (payload) => ({
    type: ActionType.GET_BOARDIDLE_FAILED,
    payload
})

export const doGetInterestRequest = () => ({
    type: ActionType.GET_INTEREST_REQUEST
})

export const doGetInterestSucceed = (payload) => ({
    type: ActionType.GET_INTEREST_SUCCEED,
    payload
})

export const doGetInterestFailed = (payload) => ({
    type: ActionType.GET_SUMMARY_FAILED,
    payload
})

export const doGetApplicantRequest = () => ({
    type: ActionType.GET_APPLICANT_REQUEST
})

export const doGetApplicantSucceed = (payload) => ({
    type: ActionType.GET_APPLICANT_SUCCEED,
    payload
})

export const doGetApplicantFailed = (payload) => ({
    type: ActionType.GET_APPLICANT_FAILED,
    payload
})
