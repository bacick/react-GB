import { useState, useCallback, useEffect } from 'react';
import '../App.css';
import { MessageForm } from './MessageForm'
import { MessageList } from './MessageList';
import { MessageChats } from './MessageChats';
import { AUTHORS } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { addMessages } from '../store/messages/actions';


const messageInit = {
  Pinky: [
  {
    text: 'Pinky, are you pondering what I\'m pondering?',
    author: AUTHORS.user,
    id: uuidv4(),
    }],
  Rick: [
    {
      text: 'Rick, are you pondering what I\'m pondering?',
      author: AUTHORS.user,
      id: uuidv4(),
    }],
    Morty: [
      {
        text: 'Morty, are you pondering what I\'m pondering?',
        author: AUTHORS.user,
        id: uuidv4(),
      }],
  };



function Chat() {
  const {idChat} = useParams();
  const dispatch = useDispatch();
  // const [chats, setChats] = useState(chatsInit)
  // const [messages, setMessages] = useState(messageInit);

  // const handleSendMessage = useCallback((newMessage) => {
  //   setMessages((prevMessages) => ({ ...prevMessages, [idChat]: [...prevMessages[idChat], newMessage], }));
  // }, [idChat]);
  const messages = useSelector((state) => state.messages[idChat])

  useEffect(() => {
    console.log(messages)
    if (messages?.length && 
      messages?.[messages?.length - 1].author !== AUTHORS.bot ) {
      const timeout = setTimeout(() => 
        dispatch(addMessages({
          text: 'I think so, Brain, but...',
          author: AUTHORS.bot,
          id: uuidv4()
        }, idChat)), 1000);
      return () => clearTimeout(timeout);
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

          //messages={ messages[idChat] }
        // onSendMessage={handleSendMessage}
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-chats">
          <MessageChats />
        </div>
        <div className="App-message">
          <MessageList />
          <MessageForm  />
        </div>
        
      </div>
    </div>
  );
}

export default Chat;
