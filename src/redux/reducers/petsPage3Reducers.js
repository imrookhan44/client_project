import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const petsPage3Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PETS_PAGE3:
            return {
                petsPage3: payload
            };
        default:
            return state;
    }
}