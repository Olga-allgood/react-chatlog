import './ChatEntry.css';
import TimeStamp from './TimeStamp';
const ChatEntry = ({sender, body, timeStamp}) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <section className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp timeStamp={timeStamp}></TimeStamp></p>
        <button className="like">🤍</button>
      </section>
    </section>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;
