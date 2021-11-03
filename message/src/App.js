import { useState, useCallback, useEffect } from 'react';
import './App.css';
import { MessageForm } from './components/MessageForm'
import { MessageList } from './components/MessageList';
import { AUTHORS } from  './utils/contacts'

const messageInit = [
  {
    text: 'text1',
    author: AUTHORS.user
  },
];

function App() {
  const [messages, setMessages] = useState(messageInit);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    console.log(messages)
  }, [messages])

  return (
    <div className="App">
      <MessageList messages={ messages }/>
      <MessageForm onSendMessage={handleSendMessage}/>
    </div>
  );
}

export default App;
