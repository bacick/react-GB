import '../App.css';
import { MessageForm } from './MessageForm'
import { MessageList } from './MessageList';
import { MessageChats } from './MessageChats';



function Chat() {
  // const {idChat} = useParams();
 
  
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
