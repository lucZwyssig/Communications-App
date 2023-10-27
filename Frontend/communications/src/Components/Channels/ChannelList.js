import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChannelList() {
    const [channels, setChannels] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getChannels();
    }, []);

    

    async function getChannels() {
        try {
            const response = await axios.get("http://localhost:3001/api/chats/channels", {
                withCredentials: true
            });
            setChannels(response.data.channels);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Channels:</h1>
            <ul>
                {channels.map((channel) => (
                    <div key={channel._id}>
                        
                        <input type="button" value={channel.name} onClick={() => navigate(`/chats/channel/${channel._id}`)}></input>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ChannelList;
