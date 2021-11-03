import React, {useRef, useState } from "react";

export const MessageForm = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef();
    // console.log(inputRef)

    const handleChange = (event) => {
        // console.log(event)
        setValue(event.target.value);
        // console.log(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(value)
        const refValue = inputRef.current.value;
        console.log(refValue)
        setValue('');
    }
    
    return (
        <div>            
            <form onSubmit={ handleSubmit }>
                <input type="text" value={value} onChange={handleChange} ref={inputRef}/>
                <input type="submit" />
            </form>
        </div>
    )
}