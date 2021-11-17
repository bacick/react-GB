import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { toggleCheckbox } from "../store/profile/actions";


export const Profile = () => {
    // const state = store.getState();
    // console.log(state)

    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(state => state.name)
    const dispatch = useDispatch();

    const handleChange = () => {
        console.log("@@@@@@")
        dispatch(toggleCheckbox)
    }

    return (
        <div>
            <h3>Profile</h3>
            <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
            {checkboxValue? (<span>{ name }</span> ) : null}
        </div>
    );
};

