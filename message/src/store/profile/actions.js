export const TOGGLE_CHECKBOX = "PROFILE::TOGGLE_CHECKBOX";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX
};

export const chageName = (name) => ({
    type: CHANGE_NAME,
    payolad: name,
});