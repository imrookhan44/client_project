import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const choosePlanReducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CHOOSE_PLAN:
            return {
                choosePlan: payload
            };
        default:
            return state;
    }
}