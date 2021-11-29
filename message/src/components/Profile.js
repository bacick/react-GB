import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { changeName, toggleCheckbox } from "../store/profile/actions";


export const Profile = () => {
    // const state = store.getState();
    // console.log(state)

    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(state => state.name)
    const[value, setValue] = useState(name)
    const dispatch = useDispatch();

    const handleChange = () => {
        console.log("@@@@@@")
        dispatch(toggleCheckbox)
    }
    const handleChangeText = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(changeName(value));
    }

    return (
        <div>
            <h3>Profile</h3>
            <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChangeText} />
                <input type="submit" />
            </form>
        </div>
    );
};

