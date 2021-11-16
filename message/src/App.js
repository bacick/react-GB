import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import  Chat from "./components/Chat";
import { MessageChats } from "./components/MessageChats";
import { Profile } from "./components/Profile";
import './App.css';


export const App = () => (   

    <BrowserRouter>
        <ul>
            {/* <li>
                <Link to="/">Home</Link>
            </li> */}
            <li>
                <Link to="/chat">Chat</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>

        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="chat" >
                <Route index element={<MessageChats />} />
                <Route path=":idChat" element={<Chat />} />
                
            </Route>
            {/* <Route path='chat'>
                <Route index element={<MessageChats />} />
                <Route path=":chatId" element={<Chat />}/>
            </Route> */}
            <Route path="*" element={<h3>404</h3>}/>
        </Routes>
    </BrowserRouter>
)