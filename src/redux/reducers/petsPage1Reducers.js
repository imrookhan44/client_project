import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const petsPage1Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PETS_PAGE1:
            return {
                petsPage1: payload
            };
        default:
            return state;
    }
}