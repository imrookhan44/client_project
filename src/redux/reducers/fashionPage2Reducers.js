import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const fashionPage2Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FASHION_PAGE2:
            return {
                fashionPage2: payload
            };
        default:
            return state;
    }
}