import * as ActionType from "../constants/TalentConstant";

// template
const INIT_STATE = {
    talents: [],
    isLoading: false,
};

// tabel
const TalentReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_TALENT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.GET_TALENT_SUCCEED:
            return applyGetProductSucceed(state, action)
        default:
            return state;
    }
};

const applyGetProductSucceed=(state, action)=> {
    return {
        ...state, 
        talents : action.payload,
        isLoading : false
    }
}

export default TalentReducer;
