
import { ChatFeed } from 'react-chat-engine-advanced';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import MyChatFeed from './component/MyChatFeed';
function App() {
  return (
    <div className="App">
    <ChatEngine
    height='100vh'
    projectID="053ccb96-b9ee-4416-82f1-c687228e5889"
    userName='Arnob'
    userSecret="1234"
    renderChatFeed={(chatAppProps)=><MyChatFeed{...chatAppProps}/>}
    
    />
    </div>
  );
}

export default App;
