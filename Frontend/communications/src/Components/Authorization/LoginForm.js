import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        username: username,
        password: password,
      }, {
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log(response.data.message);
        navigate('/chats/channels');
      }

    } catch (error) {
      if(error.response && error.response.status === 401){
        alert("incorrect password");
      }
      else if (error.response && error.response.status === 404){
        alert("Not found");   
      }
      console.log("Error:", error);
      console.log("Authorization failed");
    }
  };

  return (
    <div className="AuthorizationForm">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Username</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <h2>Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="AuthorizationSubmit">Register</button>
      </form>
    </div>
  );
}; export default LoginForm;