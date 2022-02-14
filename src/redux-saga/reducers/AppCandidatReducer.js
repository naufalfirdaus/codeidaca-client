import * as ActionType from '../constants/AppCandidat'

const INIT_STATE = {
    candidates: [],
    isLoading: false,
    isRefresh: false
}

const AppCandidatReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CANDIDAT_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_CANDIDAT_SUCCEED:{
            return applyGetCandidatSucceed(state, action)
        }

        case ActionType.EDIT_CANDIDAT_STATUS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.EDIT_CANDIDAT_STATUS_SUCCEED: {
            return applyEditCandidatStatusSucceed(state, action)
        }

        default:
            return state;
    }
}

const applyGetCandidatSucceed = (state, action) => {
    return {
        ...state,
        candidates: action.payload,
        isLoading: false,
        isRefresh: false
    }
}


const applyEditCandidatStatusSucceed = (state, action) => {
    return {
        ...state,
        candidates: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

export default AppCandidatReducer;