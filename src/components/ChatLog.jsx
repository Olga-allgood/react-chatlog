import ChatEntry from './ChatEntry';



const ChatLog = ({entries, onLike, color, users}) => {
    const chatEntries = entries.map(entry => (
        <ChatEntry 
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLike={onLike}
        color={color} 
        users={users}/>));
                
    return (
    <div className="chat-log">
      {chatEntries}
    </div>
  );
};

export default ChatLog;