import { useState, useCallback, useEffect } from 'react';
import './App.css';
import { MessageForm } from './components/MessageForm'
import { MessageList } from './components/MessageList';
import { AUTHORS } from './utils/contacts';
import { v4 as uuidv4 } from 'uuid';

const messageInit = [
  {
    text: 'Pinky, are you pondering what I\'m pondering?',
    author: AUTHORS.user,
    id: uuidv4()
  },
];

function App() {
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
      <MessageList messages={ messages }/>
      <MessageForm onSendMessage={handleSendMessage}/>
    </div>
  );
}

export default App;
