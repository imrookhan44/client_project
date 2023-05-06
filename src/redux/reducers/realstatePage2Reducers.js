import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const realstatePage2Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REALSTATE_PAGE2:
            return {
                realstatePage2: payload
            };
        default:
            return state;
    }
}