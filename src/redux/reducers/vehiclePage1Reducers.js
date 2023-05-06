import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const vehiclePage1Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_VEHICLE_PAGE1:
            return {
                vehiclePage1: payload
            };
        default:
            return state;
    }
}