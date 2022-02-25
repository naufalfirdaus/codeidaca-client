import * as ActionType from '../constants/TalentDetail'

const INIT_STATE = {
    details: [],
    isLoading: false,
    isRefresh: false
}

const TalentDetailReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_TALENTDETAIL_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_TALENTDETAIL_SUCCEED: {
            return applyGetTalentDetailSucceed(state, action)
        }


        default:
            return state;
    }
}

const applyGetTalentDetailSucceed = (state, action) => {

    return {
        ...state,
        details: [action.payload],
        isLoading: false,
        isRefresh: false
    }
}
export default TalentDetailReducer;