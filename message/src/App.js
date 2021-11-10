import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import { MessageChats } from "./components/MessageChats";

export const App = () => (
    <BrowserRouter>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/chats">Chats</Link>
            </li>
        </ul>

        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path='chat'>
                <Route index element={<MessageChats />} />
                <Route path=":chatId" element={<Chat />}/>
            </Route>
            <Route path="*" element={<h3>404</h3>}/>
        </Routes>
    </BrowserRouter>
)