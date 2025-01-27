import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  let className = 'local';

  if (props.id % 2 === 0) {
    className = 'chat-entry local';
  } else {
    className = 'chat-entry remote';
  }

  return (
    <div className={className}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p> {props.body} </p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
