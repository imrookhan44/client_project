import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const realstatePage5Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REALSTATE_PAGE5:
            return {
                realstatePage5: payload
            };
        default:
            return state;
    }
}