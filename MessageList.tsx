import React from 'react';

interface Message {
  user: string;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <strong>{message.user}: </strong>{message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
