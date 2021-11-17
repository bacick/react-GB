import { useState, useCallback, useEffect } from 'react';
import '../App.css';
import { MessageForm } from './MessageForm'
import { MessageList } from './MessageList';
import { MessageChats } from './MessageChats';
import { AUTHORS } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';


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

// const chatsInit = [
//   {
//     nameChat: "Pinky",
//     id: "Pinky",
//   },
//   {
//     nameChat: "Rick",
//     id: "Rick",
//   },
//   {
//     nameChat: "Morty",
//     id: "Morty",
//   },
// ];

function Chat() {
  const {idChat} = useParams();
 
  // const [chats, setChats] = useState(chatsInit)
  const [messages, setMessages] = useState(messageInit);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => ({ ...prevMessages, [idChat]: [...prevMessages[idChat], newMessage], }));
  }, [idChat]);

  useEffect(() => {
    if (messages[idChat].length && messages[idChat][messages[idChat].length - 1].author !== AUTHORS.bot) {
      const timeout = setTimeout(() => 
        handleSendMessage({
          text: 'I think so, Brain, but...',
          author: AUTHORS.bot,
          id: uuidv4()
        }), 1000);
      return () => clearTimeout(timeout);
    }
    // console.log(messages)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-chats">
          <MessageChats />
        </div>
        <div className="App-message">
          <MessageList messages={ messages[idChat] }/>
          <MessageForm onSendMessage={handleSendMessage} />
        </div>
        
      </div>
    </div>
  );
}

export default Chat;
