import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const secondHandPage3Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SECONDHAND_PAGE3:
            return {
                secondHandPage3: payload
            };
        default:
            return state;
    }
}