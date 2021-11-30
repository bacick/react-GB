import { ADD_CHAT, DEL_CHAT } from "./actions";

const initChat = [{
    nameChat: "Brain",
    id: "Brain",
  },
  {
    nameChat: "Rick",
    id: "Rick",
  },
  {
    nameChat: "Morty",
    id: "Morty",
    },
];

export const chatsReducer = (state = initChat, {type, payload}) => {
    switch (type) {
        case ADD_CHAT:
            return [...state, payload];
        case DEL_CHAT:
            return state.filter(({ id }) => id !== payload);
        default:
            return state;
    }
}