import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const vehiclePage3Reducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_VEHICLE_PAGE3:
            return {
                vehiclePage3: payload
            };
        default:
            return state;
    }
}