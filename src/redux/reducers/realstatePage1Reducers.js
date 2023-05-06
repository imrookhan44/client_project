import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const realstatePage1Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REALSTATE_PAGE1:
            return {
                realstatePage1: payload
            };
        default:
            return state;
    }
}