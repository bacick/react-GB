import { AUTHORS } from "../../utils/constants";
import { v4 as uuidv4 } from 'uuid';

export const ADD_MESSAGES = "MESSAGE::ADD_MESSAGES";
export const DEL_MESSAGES = "MESSAGE::DEL_MESSAGES";

export const addMessages = (newMessages, idChat) => ({
    type: ADD_MESSAGES,
    payload: { newMessages, idChat },

});

let timeout;

export const addMessagesWithReply = (newMessages, idChat) => (dispatch) => {
    dispatch(addMessages(newMessages, idChat));

    if (newMessages.author !== AUTHORS.bot) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            const botMessage = {
                text: 'I think so, Brain, but...',
                author: AUTHORS.bot,
                id: uuidv4()
            };
            dispatch(addMessages( botMessage, idChat))
        }, 1000)
    }
};