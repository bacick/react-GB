import React, { useState, useRef } from "react";
import { AUTHORS } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useParams } from 'react-router';
import { useDispatch } from "react-redux";
import { addMessagesWithReply } from "../store/messages/actions";

export const MessageForm = () => {
    const {idChat} = useParams();
    const [value, setValue] = useState('');
    const inputRef = useRef()
    const dispatch = useDispatch();
    const handleSendMessage = React.useCallback((newMessages) => {
        console.log(newMessages);
        console.log(idChat);
        dispatch(addMessagesWithReply(newMessages, idChat))
    }, [idChat]);
    
    const handleChange = (event) => {
        // console.log(event)
        setValue(event.target.value);
        // console.log(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSendMessage({
            text: value,
            author: AUTHORS.user,
            id: uuidv4()
        })
        console.log(value)
        inputRef.current?.focus();
        setValue('');
    }
    

    return (
        <div>
            <Box component="form"
                sx={{ '& > :not(style)': { m: 1 }, }}
                onSubmit={handleSubmit}>
                <FormControl sx={{ width: '40ch'}}>
                    <OutlinedInput
                        sx={{ mb: '5px' }}
                        placeholder="Please enter text"
                        autoFocus
                        value={value}
                        onChange={handleChange}
                        inputRef={inputRef}/>
                    <Button variant="contained" color="primary" type="submit">Send </Button>
                </FormControl>
            </Box > 
        </div>
        
    )
}