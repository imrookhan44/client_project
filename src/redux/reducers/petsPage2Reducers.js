import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const petsPage2Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PETS_PAGE2:
            return {
                petsPage2: payload
            };
        default:
            return state;
    }
}