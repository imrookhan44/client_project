import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const realstatePage3Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REALSTATE_PAGE3:
            return {
                realstatePage3: payload
            };
        default:
            return state;
    }
}