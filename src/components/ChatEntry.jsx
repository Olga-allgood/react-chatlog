import './ChatEntry.css';
import TimeStamp from './TimeStamp';
const ChatEntry = ({id, sender, body, timeStamp, onLike, liked }) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <li key={id} className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp timeStamp={timeStamp}></TimeStamp></p>
        <button className="like" onClick={() => onLike(id)}>
           {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </li>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;
