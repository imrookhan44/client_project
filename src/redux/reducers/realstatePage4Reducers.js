import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const realstatePage4Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REALSTATE_PAGE4:
            return {
                realstatePage4: payload
            };
        default:
            return state;
    }
}