import * as ActionType from '../constants/Curr'

const INIT_STATE = {
    curriculum: [],
    curr:{},
    isLoading: false,
    isRefresh: false
}


const currReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.curriculumRequest:{
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.curriculumSucceed:{
            return GetCurriculumSucceed(state, action)
        }

        default:
            return state;
    }
}

const GetCurriculumSucceed = (state, action) => {
    return {
        ...state,
        curriculum: action.payload,
        curr: {},
        isLoading: false,
        isRefresh: false
    }
}

export default currReducer;