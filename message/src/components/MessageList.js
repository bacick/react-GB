import React from "react";
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { useParams } from 'react-router';


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