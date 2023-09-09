
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
function App() {
  return (
    <div className="App">
    <ChatEngine
    height='100vh'
    projectID="053ccb96-b9ee-4416-82f1-c687228e5889"
    userName='Arnob'
    userSecret="1234"
    renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
    
    />
    </div>
  );
}

export default App;
