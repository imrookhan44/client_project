import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const businessPage2Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BUSINESS_PAGE2:
            return {
                businessPage2: payload
            };
        default:
            return state;
    }
}