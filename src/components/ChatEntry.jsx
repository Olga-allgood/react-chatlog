import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({id, sender, body, timeStamp, onLike, liked, color}) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <li key={id} className={`chat-entry ${sender === "Vladimir" ? "local" : "remote"}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{body}</p>
        <p className="entry-time"><TimeStamp timeStamp={timeStamp}></TimeStamp></p>
        <button className="like" onClick={() => onLike(id)}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </li>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
};
  // Fill with correct proptypes


export default ChatEntry;
