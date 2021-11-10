import { useState, useCallback, useEffect } from 'react';
import '../App.css';
import { MessageForm } from './MessageForm'
import { MessageList } from './MessageList';
import { MessageChats } from './MessageChats';
import { AUTHORS } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';


const messageInit = [
  {
    text: 'Pinky, are you pondering what I\'m pondering?',
    author: AUTHORS.user,
    id: uuidv4(),
  },
];

const chatsInit = [
  {
    nameChat: "Pinky",
    id: uuidv4(),
  },
  {
    nameChat: "Rick",
    id: uuidv4(),
  },
  {
    nameChat: "Morty",
    id: uuidv4(),
  },
];

function Chat() {
  const [chats, setChats] = useState(chatsInit)
  const [messages, setMessages] = useState(messageInit);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author !== AUTHORS.bot) {
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
          <MessageChats chats={chats}/>
        </div>
        <div className="App-message">
          <MessageList messages={ messages }/>
          <MessageForm onSendMessage={handleSendMessage} />
        </div>
        
      </div>
    </div>
  );
}

export default Chat;
