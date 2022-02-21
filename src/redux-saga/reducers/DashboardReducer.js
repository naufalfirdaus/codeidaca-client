import * as ActionType from '../constants/DashboardConstant'

const INIT_STATE = {
    summary: [],
    jurusan:[],
    pendidikan:[],
    universitas: [],
    boardidle: [],
    interest: [],
    applicant: [],
    isLoading: false,
    isRefresh: false
}

const DashboardReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_SUMMARY_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.GET_SUMMARY_SUCCEED:
            return applyGetSummarySucceed(state, action)

        case ActionType.GET_JURUSAN_REQUEST:
            return{
                ...state,
                isLoading:true
            }    
        case ActionType.GET_JURUSAN_SUCCEED:
            return applyGetJurusanSucceed(state, action)

        case ActionType.GET_PENDIDIKAN_REQUEST:
            return{
                ...state,
                isLoading:true
            }    
        case ActionType.GET_PENDIDIKAN_SUCCEED:
            return applyGetPendidikanSucceed(state, action)
        
        case ActionType.GET_UNIVERSITAS_REQUEST:
            return{
                ...state,
                isLoading:true
            }    
        case ActionType.GET_UNIVERSITAS_SUCCEED:
            return applyGetUniversitasSucceed(state, action)


        case ActionType.GET_BOARDIDLE_REQUEST:
            return{
                ...state,
                isLoading:true
            }    
        case ActionType.GET_BOARDIDLE_SUCCEED:
            return applyGetBoardidleSucceed(state, action)

        case ActionType.GET_INTEREST_REQUEST:
            return{
                ...state,
                isLoading:true
            }    
        case ActionType.GET_INTEREST_SUCCEED:
            return applyGetInterestSucceed(state, action)

        
        case ActionType.GET_APPLICANT_REQUEST:
            return{
                ...state,
                isLoading:true
            }    
        case ActionType.GET_APPLICANT_SUCCEED:
            return applyGetApplicantSucceed(state, action)

        default:
            return state;
    }
}


const applyGetSummarySucceed = (state, action) => {
    return {
        ...state,
        summary: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyGetJurusanSucceed = (state, action) => {
    return {
        ...state,
        jurusan: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyGetPendidikanSucceed = (state, action) => {
    return {
        ...state,
        pendidikan: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyGetUniversitasSucceed = (state, action) => {
    return {
        ...state,
        universitas: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyGetBoardidleSucceed = (state, action) => {
    return {
        ...state,
        boardidle: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyGetInterestSucceed = (state, action) => {
    return {
        ...state,
        interest: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyGetApplicantSucceed = (state, action) => {
    return {
        ...state,
        applicant: action.payload,
        isLoading: false,
        isRefresh: false
    }
}


export default DashboardReducer