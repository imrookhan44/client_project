import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const fashionPage3Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FASHION_PAGE3:
            return {
                fashionPage3: payload
            };
        default:
            return state;
    }
}