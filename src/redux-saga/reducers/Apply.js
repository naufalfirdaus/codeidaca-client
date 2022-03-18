import * as ActionType from '../constants/Apply'

const INIT_STATE = {
    apply : [],
    isLoading : false,
    isRefresh : false
}

const ApplyReducer = (state = INIT_STATE, action)=>{
    switch (action.type) {
        case ActionType.ADD_APPLY_REQUEST:
            return{
                ...state,
                isLoading : true,
                isRefresh : true
            }
            case ActionType.ADD_APPLY_SUCCEED:
                return applyAddApplySucceed(state, action)
    
        default:
            return state;
    }
}

const applyAddApplySucceed=(state,action)=>{
    let {payload} = action;
    payload = {...payload}
    return{
        ...state,
        apply : [...state.apply,payload],
        isLoading : false,
        isRefresh : true
    }
}

export default ApplyReducer