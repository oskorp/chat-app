import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './Componentes/chatFeed';
const App = () =>{
    return(
        <ChatEngine
        height='100vh'
        projectID="537b97d5-fb37-4d25-a234-d2dfa7eac3fc"
        userName="omkar"
        userSecret="123123"
        renderChatFeed={
            (chatAppProps) => <ChatFeed {... chatAppProps}/>
        }
        />
    )
}


export default App;