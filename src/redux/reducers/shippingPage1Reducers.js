import { ActionTypes } from "../constants/action-types"



export const shippingPage1Reducers = (state = { shippingPage1: undefined }, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_SHPPING_PAGE1:
            return {
                shippingPage1: payload
            };
        default:
            return state;
    }
}