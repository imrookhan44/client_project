import { ActionTypes } from "../constants/action-types"

export const setViewItem = (itemId) => {
    return {
        type: ActionTypes.SET_VIEW_ITEM,
        payload: itemId,
    }
}
export const setShippingPage1 = (shippingPage1) => {
    return {
        type: ActionTypes.SET_SHPPING_PAGE1,
        payload: shippingPage1,
    }
}
export const setShippingPage2 = (shippingPage2) => {
    return {
        type: ActionTypes.SET_SHPPING_PAGE2,
        payload: shippingPage2,
    }
}