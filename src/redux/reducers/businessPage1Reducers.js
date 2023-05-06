import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const businessPage1Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BUSINESS_PAGE1:
            return {
                businessPage1: payload
            };
        default:
            return state;
    }
}