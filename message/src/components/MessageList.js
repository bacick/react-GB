import React from "react";

export const MessageList = ({messages}) => {
    return (
    <div >
        { messages.map((mes) => (
            <div key={mes.id}>
                <div>{ mes.author}: </div>
                <div>{ mes.text}</div>
            </div>
        ))}
    </div>    
    )
}