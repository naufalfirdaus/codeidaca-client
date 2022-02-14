import * as ActionType from '../constants/AppBatch'

const INIT_STATE = {
    batchs: [],
    isLoading: false,
    isRefresh: false
}

const AppBatchReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_BATCH_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_BATCH_SUCCEED:{
            return applyGetBatchSucceed(state, action)
        }

        case ActionType.ADD_BATCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.ADD_BATCH_SUCCEED: {
            return applyAddBatchSucceed(state, action)
        }
        
        case ActionType.EDIT_BATCH_STATUS_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.EDIT_BATCH_STATUS_SUCCEED: {
            return applyEditBatchStatusSucceed(state, action)
        }

        case ActionType.DELETE_BATCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: false
            }
        }
        case ActionType.DELETE_BATCH_SUCCEED: {
            return applyDeleteBatchSucceed(state,action)
        }
        default:
            return state;
    }
}

const applyGetBatchSucceed = (state, action) => {
    return {
        ...state,
        batchs: action.payload,
        isLoading: false,
        isRefresh: false
    }
}

const applyAddBatchSucceed = (state, action) => {

}

const applyEditBatchStatusSucceed = (state, action) => {
    return {
        ...state,
        batchs: action.payload,
        isLoading: false,
        isRefresh: false
    }
}


const applyDeleteBatchSucceed = (state, action) => {
    const { payload } = action;
    const filterBatch= state.batchs.filter(el => el.batch_id !== payload)
    return {
        ...state,
        batchs : [...filterBatch],
        isLoading: false,
        isRefresh : true
    }
}

export default AppBatchReducer;