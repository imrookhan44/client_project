import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const vehiclePage4Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_VEHICLE_PAGE4:
            return {
                vehiclePage4: payload
            };
        default:
            return state;
    }
}