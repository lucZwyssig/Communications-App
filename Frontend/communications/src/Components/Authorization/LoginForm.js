import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email: email,
        password: password,
      }, {
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log(response.data.message);
        navigate('/chats/channels');
      }

    } catch (error) {
      console.log("Error:", error);
      console.log("Authorization failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Email</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}; export default LoginForm;