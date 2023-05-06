import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const searchReducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SEARCH:
            return {
                search: payload
            };
        default:
            return state;
    }
}