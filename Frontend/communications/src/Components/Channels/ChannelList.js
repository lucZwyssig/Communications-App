import axios from "axios";
import { useEffect, useState } from "react";

function ChannelList() {
    useEffect(() => {
        getChannels();
    }, []);

    const [channels, setChannels] = useState([]);

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
                    <li key={channel._id}>{channel.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ChannelList;
