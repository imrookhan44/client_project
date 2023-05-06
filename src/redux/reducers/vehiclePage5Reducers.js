import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const vehiclePage5Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_VEHICLE_PAGE5:
            return {
                vehiclePage5: payload
            };
        default:
            return state;
    }
}