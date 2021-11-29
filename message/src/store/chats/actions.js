export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DEL_CHAT = "CHATS::DEL_CHAT";

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
});

export const deleteChat = (id) => ({
    type: DEL_CHAT,
    payload: id,
});