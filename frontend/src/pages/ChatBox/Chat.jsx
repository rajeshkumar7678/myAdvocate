import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './Chat.css';

const socket = io('http://localhost:5000');

function Chat() {
  const {UserName,LawyerName} =useParams()
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [receiver, setReceiver] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (username && receiver) {
        const response = await axios.get(`http://localhost:5000/messages/${UserName}/${LawyerName}`);
        setMessages(response);
      }
    };

    fetchData();
  }, [username, receiver]);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    if (username) {
      socket.emit('joinRoom', username);
    }

    return () => {
      socket.off('receiveMessage');
    };
  }, [username]);
  const handleSendMessage = () => {
    if (!UserName) {
      alert('Please enter your username');
      return;
    }
  
    if (!LawyerName) {
      alert("Please enter the receiver's username");
      return;
    }
  
    const newMessage = {
      sender: UserName,
      receiver,
      content: inputMessage,
    };
  
    setMessages((prevMessages) => [...prevMessages, newMessage]); // Add the new message to the messages state immediately
  
    socket.emit('sendMessage', newMessage);
    setInputMessage('');
  };
  
  
  return (
    <div className="Acontainer">
      <div className="cleft-container">
        <div className="cusername-container">
          <input
            type="text"
            value={UserName}

            placeholder="Enter your username"
          />
        </div>
        <div className="creceiver-container">
          <input
            type="text"
            value={LawyerName}
            onChange={(e) => setReceiver(LawyerName)}
            placeholder="Enter receiver's username"
          />
        </div>
      </div>
      
      <div className="cright-container">
        
        <div className="chat-container">
        <div className="navbar">
          <h2>{LawyerName}</h2>
        </div>
          <div className="cmessages-container">
            {messages.map((message) => (
              <div
                key={message._id}
                className={`message ${message.sender === username ? 'own-message' : 'other-message'}`}
              >
                <p className="cmessage-content">
                  <span className="message-sender">{message.sender}: </span>
                  {message.content}
                </p>
              </div>
            ))}
          </div>
          <div className="cinput-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message"
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
