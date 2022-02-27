import * as ActionType from '../constants/Curr'

const INIT_STATE = {
    curriculum: [],
    curr:{},
    isLoading: false,
    isRefresh: false
}

const currReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.curriculum_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.curriculum_SUCCEED:{
            return filCurriculumSucceed(state, action)
        }

        default:
            return state;
    }
}

const filCurriculumSucceed = (state, action) => {
    return {
        ...state,
        curriculum: action.payload,
        curr: {},
        isLoading: false,
        isRefresh: false
    }
}

export default currReducer;