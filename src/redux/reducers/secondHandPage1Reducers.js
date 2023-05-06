import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const secondHandPage1Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SECONDHAND_PAGE1:
            return {
                secondHandPage1: payload
            };
        default:
            return state;
    }
}