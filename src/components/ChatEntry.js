import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp'
import './ChatEntry.css';

const ChatEntry = (props) => {
  let local = "Vladimir"
  if (props.sender === local) {
    return (
      <section className="chat-entry local">
        <p className="entry-name">{props.sender}</p>
        <div className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time"><Timestamp time={props.timeStamp}/></p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="chat-entry remote">
        <p className="entry-name">{props.sender}</p>
        <div className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time"><Timestamp time={props.timeStamp}/></p>
        </div>
      </section>
    );
  }


};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
