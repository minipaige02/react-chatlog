import React from 'react';
import PropTypes from 'prop-types';
import ChatEvent from './ChatEntry'
import './ChatLog.css';

const ChatLog = (props) => {
  const messages = props.messages.map((message, i) => {
    return (
      <div key={i}>
        <ChatEvent 
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
        />
      </div>
    );
  });

  return (
    <section className="chat-log">
      {messages}
    </section>
  );
}

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatLog;
