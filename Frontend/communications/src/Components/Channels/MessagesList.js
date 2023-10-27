import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function MessagesList() {
  const id = useParams();
  const [messages, setMessages] = useState([]);
  const [writingMessage, setWritingMessage] = useState("");

  useEffect(() => {
    getMessages();
    console.log(id.channelId);
    const intervalId = setInterval(() => {
      getMessages();
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, [id]);

  async function getMessages() {
    try {
      const response = await axios.get(`http://localhost:3001/api/chats/${id.channelId}/messages`, {
        withCredentials: true
      });

      if (response.status === 200) {
        setMessages(response.data.messages);
      } else if (response.status === 304) {
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  async function postMessage(){
    try{
      await axios.post(`http://localhost:3001/api/chats/${id.channelId}/messages`, {
        text: writingMessage
      }, {
        withCredentials: true,
      });
      getMessages();
    } catch(error){
      console.log(error);
    };
  };

  function handleSubmit(){
    postMessage();
    setWritingMessage("");
  };

  return (
    <div>
      {messages.map((message) => (
        <div key={message._id}>
          <h3>{message.text}</h3>
          <p>{message.sender}</p>
        </div>
      ))}
      <input type='text' placeholder='write message' value={writingMessage} onChange={(e) => setWritingMessage(e.target.value)}></input>
      <input type='button' onClick={handleSubmit} value='submit'></input>
    </div>
  );
}

export default MessagesList;
