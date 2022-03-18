import * as ActionType from '../constants/Placement'

const INIT_STATE = {
    place: [],
    isLoading: false,
    isRefresh: false
}

const PlacementReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.ADD_PLACE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.ADD_PLACE_SUCCEED: {
            return applyAddPlaceSucceed(state, action)
        }
        case ActionType.SWITCH_IDLE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: true
            }
        }
        case ActionType.SWITCH_IDLE_SUCCEED: {
            return applySwitchIdleSucceed(state, action)
        }

        default:
            return state;
    }
}

const applyAddPlaceSucceed = (state, action) => {
    return {
        ...state,
        place: action.payload,
        isLoading: false,
        isRefresh: false
    }
}
const applySwitchIdleSucceed = (state, action) => {
    return {
        ...state,
        place: action.payload,
        isLoading: false,
        isRefresh: false
    }
}


export default PlacementReducer;