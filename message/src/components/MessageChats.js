import React from "react";
import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addChat, deleteChat } from "../store/chats/actions";
import { selectChats } from "../store/chats/selector"



export const MessageChats = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(1);
    // const [chats, setChats] = React.useState(chatsInit)
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleAddChat = useCallback(
    (nameChat) => {
      const newId = uuidv4();
      console.log(nameChat)
      dispatch(addChat({ nameChat, id: newId }));
      // setMessages((prevMessages) => ({
      //   ...prevMessages,
      //   [newId]: [],
      // }));
    },
    [dispatch]
  );

  const handleDelChat = useCallback((id) => {
    console.log( id)
    dispatch(deleteChat(id))
  }, [dispatch])

  const handleClickDelChat = (event, index) => {
    handleDelChat(index)
  }

  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddChat(value);
    // console.log(value)
    setValue("");
  };
    
  return (
      <>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="secondary mailbox folder">
                {chats.map((chat) => (
                <NavLink to={`/chat/${chat.id}`}>
                <ListItemButton
                    key={chat.id}
                    selected={selectedIndex === chat.id}
                    onClick={(event) => handleListItemClick(event, chat.id)}
                >
                      <ListItemText primary={chat.nameChat} />
                      <Button variant="contained" color="primary" type="submit" onClick={(event) => handleClickDelChat(event, chat.id)}>-</Button>
                </ListItemButton>
                </NavLink>
                ))}
          </List>
        </Box>
        <Box component="form"
                sx={{ '& > :not(style)': { m: 1 }, }}
                onSubmit={ handleSubmit }>
                <FormControl sx={{ width: '25ch'}}>
                    <OutlinedInput
                        sx={{ mb: '5px' }}
                        placeholder="Please enter text"
                        autoFocus
                        value={ value }
                        onChange={ handleChange }
                        />
                    <Button variant="contained" color="primary" type="submit">Add chat</Button>
                </FormControl>
            </Box > 
      </> 
    )
}