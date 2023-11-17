import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddChannel from "./AddChannel";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Other/Header";

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
    };

    
    return (

        <Container fluid className="ChannelContainer">

            <div id="ChannelPageDiv">
                <Header />
                <Col id="ChannelCol" className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <h2>Channels</h2>
                    <div id="ChannelListDiv" >
                        {channels.map((channel) => (
                            <div key={channel._id} className="SingleChannelListDiv">
                                <input type="button" value={channel.name} className="SingleChannelDiv" onClick={() => navigate(`/chats/channel/${channel._id}`)}></input>

                            </div>
                        ))}
                    </div>
                    <AddChannel getChannels={getChannels}></AddChannel>
                    
                </Col>
            </div>
        </Container >

    );
}

export default ChannelList;
