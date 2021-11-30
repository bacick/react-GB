import { CHANGE_NAME, TOGGLE_CHECKBOX } from "./actions";

const stateInit = {
    checkbox: false,
    name: "Homer",
};

export const profileReducer = (state = stateInit, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox,
            };
            case CHANGE_NAME:
                return {
                    ...state,
                    name: action.payload,
                };
        default:
            return state;
    }
};