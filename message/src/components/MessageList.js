import React from "react";
import Box from '@mui/material/Box';


export const MessageList = ({messages}) => {
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