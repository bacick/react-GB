import React, { useState } from "react";
import { AUTHORS } from '../utils/contacts';
import { v4 as uuidv4 } from 'uuid';

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
            <form onSubmit={ handleSubmit }>
                <input type="text" value={value} onChange={handleChange}/>
                <input type="submit" />
            </form>
        </div>
    )
}