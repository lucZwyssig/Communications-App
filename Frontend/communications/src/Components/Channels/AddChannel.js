import axios from "axios";
import { useState } from "react";
import { CloseButton } from "react-bootstrap";

function AddChannel(props) {
    const BackendURL = process.env.BACKEND_URL || "http://localhost:3001";
    const [channelname, setChannelname] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    async function postAddChannel() {
        try {
            const response = await axios.post(`${BackendURL}/api/chats/channel`, {
                channelName: channelname
            }, {
                withCredentials: true
            });
            props.getChannels();
            setChannelname("");
        } catch (error) {
            if (error.response && error.response.status === 409) {
                alert("channel name already exists");
                setChannelname("");
            }
            console.log(error);
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            postAddChannel();

        }
    };

    return (
        <div className="AddChannel">
            {showPopup ?
                <div className="AddChannelContent">
                    <CloseButton onClick={() => setShowPopup(false)} />
                    <input type="text" placeholder="channel name" value={channelname} onKeyDown={handleKeyPress} onChange={(e) => setChannelname(e.target.value)}></input>
                    <input type="button" onClick={postAddChannel} value="create"></input>


                </div>
                :
                <input type="button" onClick={() => setShowPopup(true)} value="add Channel"></input>
            }


        </div>
    );
}; export default AddChannel;