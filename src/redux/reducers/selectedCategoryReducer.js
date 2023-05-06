import { ActionTypes } from "../constants/action-types"

const initialState = {
    selectedCategory: false
}

export const selectedCategoryReducers = (state = { initialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SELECTED_CATAGORY:
            return {
                selectedCategory: payload
            };
        default:
            return state;
    }
}