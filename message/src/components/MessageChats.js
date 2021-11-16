import React from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

const chats = [
    {
      nameChat: "Pinky",
      id: "Pinky",
    },
    {
      nameChat: "Rick",
      id: "Rick",
    },
    {
      nameChat: "Morty",
      id: "Morty",
    },
  ];

export const MessageChats = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    // const [chats, setChats] = React.useState(chatsInit)
    const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    };
    
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="secondary mailbox folder">
                {chats.map((chat) => (
                <NavLink to={`/chat/${chat.id}`}>
                <ListItemButton
                    key={chat.id}
                    selected={selectedIndex === chat.id}
                    onClick={(event) => handleListItemClick(event, chat.id)}
                >
                    <ListItemText primary={ chat.nameChat } />
                </ListItemButton>
                </NavLink>
                ))}
            </List>
            <Button variant="contained">+</Button>
        </Box>
    )
}