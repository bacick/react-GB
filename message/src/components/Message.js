import React from "react";

export const Message = ({message, onClick}) => {
    return (
        <div>
            <h3>{message}</h3>
            <button onClick={onClick}>ClickMe</button>
        </div>
    )
}