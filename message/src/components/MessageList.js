import React from "react";
import Box from '@mui/material/Box';
import { useState, useCallback, useEffect } from 'react';
import { AUTHORS } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { useParams } from 'react-router';


// const messageInit = {
//     Pinky: [
//     {
//       text: 'Pinky, are you pondering what I\'m pondering?',
//       author: AUTHORS.user,
//       id: uuidv4(),
//       }],
//     Rick: [
//       {
//         text: 'Rick, are you pondering what I\'m pondering?',
//         author: AUTHORS.user,
//         id: uuidv4(),
//       }],
//       Morty: [
//         {
//           text: 'Morty, are you pondering what I\'m pondering?',
//           author: AUTHORS.user,
//           id: uuidv4(),
//         }],
//     };

export const MessageList = () => {
  const {idChat} = useParams();
  const messages = useSelector((state) => state.messages[idChat])
  console.log(messages);
  console.log(idChat)
    return (
        <div >
            { messages.map((mes) => (
                <Box component="div"
                    key={mes.id}
                    sx={{ margin: '5px', backgroundColor: '#e4eaf026'}}
                    >
                    <div>{ mes.author}: </div>
                    <div>{ mes.text}</div>
                </Box>
                ))}
    </div>    
    )
}