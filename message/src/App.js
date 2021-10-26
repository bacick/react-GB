import './App.css';
import { Message } from './components/Message'

const text = "I'm nut !!!";
const handleClick = () => {
  alert("You cool!")
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <h3>Hello, {props.name}</h3>
        <Message message={text} onClick={ handleClick }/>
      </header>
    </div>
  );
}

export default App;
