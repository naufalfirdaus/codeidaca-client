import * as ActionType from '../constants/Client'

const INIT_STATE = {
    clients: [],
    isLoading: false,
    isRefresh: false
}

const ClientReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_CLIENT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_CLIENT_SUCCEED: {
            return applyGetClientSucceed(state, action)
        }


        default:
            return state;
    }
}

const applyGetClientSucceed = (state, action) => {

    return {
        ...state,
        clients: [action.payload],
        isLoading: false,
        isRefresh: false
    }
}
export default ClientReducer;