import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const fashionPage1Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FASHION_PAGE1:
            return {
                fashionPage1: payload
            };
        default:
            return state;
    }
}