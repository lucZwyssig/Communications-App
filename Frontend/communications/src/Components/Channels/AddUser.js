import { useState } from "react";
import { useParams } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { CloseButton } from "react-bootstrap";

function AddUser() {
    const id = useParams();
    const [usernameInput, setUsernameInput] = useState("");
    const [showText, setShowText] = useState(false);

    async function addUser() {
        try {
            const response = await axios.post(`http://localhost:3001/api/chats/${id.channelId}`, {
                usernameInput: usernameInput,
            }, {
                withCredentials: true,
            });

            if (response.status === 201) {
                console.log("user added");
                setUsernameInput("");
                setShowText(false);
            }

            else if (response.status === 400) {
            }

        } catch (error) {
            console.log("error");
        }
    };

    function handleKeyPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            addUser();
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
                    </div>
            }
        </div>
    );
}; export default AddUser;