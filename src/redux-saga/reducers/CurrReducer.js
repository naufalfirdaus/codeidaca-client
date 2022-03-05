import * as ActionType from '../constants/Curr'

const INIT_STATE = {
    curriculum: [],
    isLoading: false,
    isRefresh: false
}


const currReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CURRICULUM_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_CURRICULUM_ID_SUCCEED:{
            return applyGetCurriculumSucceed(state, action)
        }

        case ActionType.GET_CURRICULUM_TYPE_REQUEST:{
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }

        case ActionType.GET_CURRICULUM_TYPE_SUCCEED:{
            return applyGetCurriculumTypeSucceed(state, action)
        }

        default:
            return state;
    }
}

const applyGetCurriculumSucceed = (state, action) => {
    // let result = [action.payload]
    // console.log(result);
    // let hasil = [...result]
    // console.log(hasil[0].curriculum.curr_name);
    return {
        ...state,
        curriculum: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyGetCurriculumTypeSucceed = (state, action) => {
    return {
        ...state,
        curriculum: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

export default currReducer;