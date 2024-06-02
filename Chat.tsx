import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import './Chat.css';

interface Message {
  user: string;
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (message: string) => {
    const newMessage = { user: 'You', text: message };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
