import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { CloseButton } from "react-bootstrap";

function AddUser(props) {
    const BackendURL = process.env.BACKEND_URL || "http://localhost:3001";
    const navigate = useNavigate();
    const id = useParams();
    const [usernameInput, setUsernameInput] = useState("");
    const [showText, setShowText] = useState(false);

    async function addUser() {
        try {
            const response = await axios.post(`${BackendURL}/api/chats/${id.channelId}`, {
                usernameInput: usernameInput,
            }, {
                withCredentials: true,
            });

            if (response.status === 201) {
                console.log("user added");
                setUsernameInput("");
                setShowText(false);
                props.setGetUsers(true);
            }



        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("user already exists");
                setUsernameInput("");
            } else if (error.response && error.response.status == 404) {
                alert("User not found");
            }
            console.log("error");
        }
    };

    function handleKeyPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            addUser();
        };
    };

    async function leaveChannel() {
        try {
            const response = await axios.delete(`${BackendURL}/api/chats/${id.channelId}/users`, {
                withCredentials: true,
            });
            navigate("/chats/channels");
        } catch (error) {
            if (error.response && error.response.status === 404) {
                navigate("/chats/channels");
            }
            else {
                console.log("error :(");
            };
        };
    };

    return (
        <div className="AddUser">
            {
                (showText) ?
                    <div className="AddUser">
                        <input type="text" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} placeholder="enter username" onKeyDown={handleKeyPress}></input>
                        <PiMagnifyingGlassBold onClick={() => addUser()} />
                        <CloseButton onClick={() => setShowText(false)} />
                    </div>
                    :
                    <div className="AddUser" onClick={() => setShowText(true)}>

                        <p>Add User</p>
                        <AiOutlinePlus />
                        <input type="button" value="leave Channel" onClick={leaveChannel}></input>
                    </div>
            }
        </div>
    );
}; export default AddUser;