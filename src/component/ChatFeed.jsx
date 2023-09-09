import MyMessages from './MyMessages'
import TheirMessages from './TheirMessages'
import MessagesForm from './MessagesForm'
const ChatFeed =(props)=>
{
    const [chats,activeChat,userName,messages]=props;
    const chat=chats&& chats[activeChat];
    const renderMessages=()=>
    {
        const keys=Object.keys(messages);
        return keys.map((key,index)=>{
            const message=messages[key];
            const lastMessageKey=index===0?null:keys[index-1];
            const isMyMessages=userName===message.sender.userName;

            return(
                <div key={`msg_${index}`} style={{width:'100%'}}>
                <div className="message-block">
                    {
                        isMyMessages?
                        <MyMessages message={message}/>
                        :
                    <TheirMessages message={message}/>
                        
                    }

                </div>
                <div className="read-receipts" style={{ marginRight: isMyMessages ? '18px' : '0px', marginLeft: isMyMessages ? '0px' : '68px' }}>
          </div>
                </div>
            )
        })
    }
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                {renderMessages()};
                <div style={{height:'100px'}}/>
                    <div className="message-from-container">
                        <MessagesForm {...props} chatId={activeChat}/>

                    </div>
            </div>
        </div>
    )
}
export default ChatFeed;