import { ActionTypes } from "../constants/action-types"



export const viewItemReducers = (state = { itemId: 0 }, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_VIEW_ITEM:
            return {
                itemId: payload
            };
        default:
            return state;
    }
}