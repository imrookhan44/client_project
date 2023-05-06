import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const vehiclePage2Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_VEHICLE_PAGE2:
            return {
                vehiclePage2: payload
            };
        default:
            return state;
    }
}