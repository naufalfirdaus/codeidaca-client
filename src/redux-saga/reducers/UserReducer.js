import * as ActionType from '../constants/User';

const INIT_STATE = {
    
    profile:{},
    isLogout : false,
    isLoading : true,
    isLoggedIn : false
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.ADD_SIGNUP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.ADD_SIGNUP_SUCCEED: {
            return applyAddSignupSucceed(state, action)
        }
        case ActionType.GET_SIGNIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_SIGNIN_SUCCEED: {
            return applyGetSigninSucceed(state, action)
        }
        case ActionType.GET_SIGNOUT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_SIGNOUT_SUCCEED: {
            return applyGetSignoutSucceed(state, action)
        }
        case ActionType.SIGNUP_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        default:
            return state;
    }

}

const applyAddSignupSucceed = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        username: payload.user_name,
        email: payload.user_email,
        role_type: payload.user_role_type,
        isLoading: false,
        status: true
    }
}

const applyGetSigninSucceed = (state, action) => {
    const { payload } = action;
    const { profile } = payload
    return {
        ...state,
        profile: {...action.payload},
        isLoading: false,
        isLoggedIn : true,
        isLogout : false
    }
}

const applyGetSignoutSucceed = (state, action) => {
    return {
        ...state,
        profile: undefined,
        isLoading: false
    }
}


export default userReducer