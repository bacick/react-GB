import React, { useState } from "react";
import { AUTHORS } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';


export const MessageForm = ({onSendMessage}) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        // console.log(event)
        setValue(event.target.value);
        // console.log(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage({
            text: value,
            author: AUTHORS.user,
            id: uuidv4()
        })
        console.log(value)
        setValue('');
    }
    
    return (
        <div>
            <Box component="form"
                sx={{ '& > :not(style)': { m: 1 }, }}
                
                onSubmit={handleSubmit}>
                <FormControl sx={{ width: '40ch'}}>
                    <OutlinedInput sx={{ mb: '5px'}}placeholder="Please enter text" value={value} onChange={handleChange}/>
                    <Button variant="contained" color="primary" type="submit">Send </Button>
                </FormControl>
            </Box > 
        </div>
        
    )
}