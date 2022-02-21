import * as ActionType from '../constants/AppSettingConstant'

const INIT_STATE = {
    talent: [],
    isLoading: false,
    isRefresh: false
}


const AppSettingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_TALENT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.GET_TALENT_SUCCEED:
            return applyGetTalentSucceed(state, action)

        case ActionType.UPDATE_TALENT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.UPDATE_TALENT_SUCCEED:
            return applyUpdateTalentSucceed(state, action)

        default:
            return state;
    }
}

const applyGetTalentSucceed = (state, action) => {
    return {
        ...state,
        talent: {...action.payload},
        isLoading: false,
        isRefresh: false
    }
}

const applyUpdateTalentSucceed = (state, action) => {
    // let { payload } = action;
    const { payload } = action;
    return {
        ...state,
        // talent: action.payload,
        talent: payload,
        isLoading: false,
        isRefresh: false
    }
}

export default AppSettingReducer