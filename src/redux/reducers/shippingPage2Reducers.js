import { ActionTypes } from "../constants/action-types"



export const shippingPage2Reducers = (state = { shippingPage2: undefined }, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_SHPPING_PAGE2:
            return {
                shippingPage2: payload
            };
        default:
            return state;
    }
}