export const ADD_MESSAGES = "MESSAGE::ADD_MESSAGES";
export const DEL_MESSAGES = "MESSAGE::DEL_MESSAGES";

export const addMessages = (newMessages, idChat) => ({
    type: ADD_MESSAGES,
    payload: { newMessages, idChat },

});