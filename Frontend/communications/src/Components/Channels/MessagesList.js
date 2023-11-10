import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router';
import Header from '../Other/Header';
import AddUser from './AddUser';


function MessagesList() {
  const id = useParams();
  const [messages, setMessages] = useState([]);
  const [writingMessage, setWritingMessage] = useState("");
  const lastMessageRef = useRef(null);

  const messageListRef = useRef(null);
  const prevMessagesLengthRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    getMessages();
    const intervalId = setInterval(() => {
      getMessages();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [id]);

  useEffect(() => {
    const isNewMessage = messages.length > prevMessagesLengthRef.current;

    if (isNewMessage) {
      scrollToBottom();
    }

    prevMessagesLengthRef.current = messages.length;
  }, [messages]);
  


async function getMessages() {
  try {
    const response = await axios.get(`http://localhost:3001/api/chats/${id.channelId}/messages`, {
      withCredentials: true
    });

    if (response.status === 200) {
      setMessages(response.data.messages);
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      navigate("/chats/channels");
    } else {
      console.error("Unexpected response status:");
    }
  }
}




  async function postMessage() {
    try {
      await axios.post(`http://localhost:3001/api/chats/${id.channelId}/messages`, {
        text: writingMessage
      }, {
        withCredentials: true,
      });
      
      await getMessages(); 
      setWritingMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit() {
    if(writingMessage !== ""){
      
    postMessage();
    setWritingMessage("");
    
    
    } 
  };

  function scrollToBottom() {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); 
      handleSubmit();
      
    }
  }

  return (
    <Container fluid className="SingleChannelContainer">
      <Header/>
      <div id="MessageList">
        {messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMessageRef : null}
            className={message.messagetype === "user-message" ? "user-message" : "other-message"}
          >
            <h4>{message.text}</h4>
            <p>{message.sender}</p>
          </div>
        ))}
      </div>
      <div className="SingleChannelOptions">
        <div className="WriteMessage">
        <input type='text' placeholder='write message' value={writingMessage} onChange={(e) => setWritingMessage(e.target.value)} onKeyDown={handleKeyPress}></input>
        <input type='button' onClick={handleSubmit} value='send'></input>
        </div>
        <AddUser/>
      </div>
    </Container>
  );
}

export default MessagesList;
