import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../../App.css"

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        username: username,
        password: password,
      }, {
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log(response.data.message);
        navigate("/chats/channels");
      }

    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Username already exists");
      }
      console.log("Authorization failed");
    }
  };

  return (
    <div className="AuthorizationForm">
      <h1>Register</h1>
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
        <input type="submit" className="AuthorizationSubmit" value="Register"></input>
        <Link to={"/login"} className="AuthorizationLink">already have an account?</Link>
        </div>        
      </form>
    </div>
  );
}; export default RegisterForm;