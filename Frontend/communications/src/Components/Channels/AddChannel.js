import axios from "axios";
import { useState } from "react";
import { CloseButton } from "react-bootstrap";

function AddChannel(props) {
    const [channelname, setChannelname] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    async function postAddChannel() {
        try {
            const response = await axios.post("http://localhost:3001/api/chats/channel", {
                channelName: channelname
            }, {
                withCredentials: true
            });
            props.getChannels();
            setChannelname("");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="popup">
            {showPopup ?
                <div className="overlay">
                    <div className="content">
                        <p>Add Channel</p>
                        <input type="text" value={channelname} onChange={(e) => setChannelname(e.target.value)}></input>
                        <input type="button" onClick={postAddChannel} value="create"></input>
                        <CloseButton onClick={() => setShowPopup(false)}/>
                    </div>
                </div>
                :
                <input type="button" onClick={() => setShowPopup(true)} value="add Channel"></input>
            }


        </div>
    );
}; export default AddChannel;