import { ADD_MESSAGES, DEL_MESSAGES } from "./actions";
import { ADD_CHAT, DEL_CHAT } from "../chats/actions";
import { AUTHORS } from '../../utils/constants';

const messageInit = {
    Brain: [
    {
      text: 'Pinky, are you pondering what I\'m pondering?',
      author: AUTHORS.user,
      id: 1,
      }],
    Rick: [
      {
        text: 'Rick, are you pondering what I\'m pondering?',
        author: AUTHORS.user,
        id: 2,
      }],
      Morty: [
        {
          text: 'Morty, are you pondering what I\'m pondering?',
          author: AUTHORS.user,
          id: 3,
        }],
};
    
export const messagesReducer = (state = messageInit, { payload, type}) => {
    switch (type) {
        case ADD_MESSAGES:
        return {
          ...state,
          [payload.idChat]: [...state[payload.idChat], payload.newMessages]
        };
        case DEL_MESSAGES:
        return state.filter(({ id }) => id !== payload);
        case ADD_CHAT:
          return {
            ...state,
            [payload.id]: [],
        };
        case DEL_CHAT: {
          
          const newMessages = { ...state };
          delete newMessages[payload.idChat];
          return newMessages;
        }
        default:
            return state;
    }
}