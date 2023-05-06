import { ActionTypes } from "../constants/action-types"

const initialState = {

}

export const buyOrSellReducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.BUYING_OR_SELLING:
            return {
                buyOrSell: payload
            };
        default:
            return state;
    }
}