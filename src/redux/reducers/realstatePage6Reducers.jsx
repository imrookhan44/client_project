import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const realstatePage6Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_REALSTATE_PAGE6:
            return {
                realstatePage6: payload
            };
        default:
            return state;
    }
}