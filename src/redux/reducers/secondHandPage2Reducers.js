import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const secondHandPage2Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SECONDHAND_PAGE2:
            return {
                secondHandPage2: payload
            };
        default:
            return state;
    }
}