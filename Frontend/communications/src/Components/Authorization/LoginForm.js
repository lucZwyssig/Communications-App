import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

function LoginForm() {
  const BackendURL = process.env.BACKEND_URL || "http://localhost:3001";
  const backendUrl = process.env.BACKEND_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=> {
    console.log(backendUrl);
  },[])
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/login`, {
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
      if (error.response && error.response.status === 401) {
        alert("incorrect password");
      }
      else if (error.response && error.response.status === 404) {
        alert("Not found");
      }
      console.log("Error:", error);
      console.log("Authorization failed");
    }
  };

  return (
    <div className="AuthorizationForm">
      <h1>Login</h1>
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
        <div className="SubmitDiv">
          <input type="submit" value="Login" className="AuthorizationSubmit"></input>
          <Link to={"/"} className="AuthorizationLink">don't have an account?</Link>
        </div>
      </form>
    </div>
  );
}; export default LoginForm;