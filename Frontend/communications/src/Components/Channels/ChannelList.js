import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddChannel from "./AddChannel";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Other/Header";

function ChannelList() {
    const [channels, setChannels] = useState([]);
    const navigate = useNavigate();
    const [channelInfo, setChannelInfo] = useState([]);
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

    function showInfo(channel) {
        setChannelInfo(channel.members);
    };



    return (
        <Container fluid className="ChannelContainer">
            <Header />
            <Row>
                <Col id="ChannelCol" className="col-12 col-md-6">
                    <div id="ChannelContentDiv">
                        <div id="ChannelsDiv">
                            <ul>
                                {channels.map((channel) => (
                                    <div key={channel._id}>
                                        <input type="button" value={channel.name} id="SingleChannelDiv" onClick={() => navigate(`/chats/channel/${channel._id}`)}
                                            onMouseEnter={() => showInfo(channel)} onMouseLeave={() => setChannelInfo([])}></input>
                                            <hr style={{width: "90%"}}/>
                                    </div>
                                ))}
                            </ul>

                        </div>
                        <div id="ChannelMembersDiv">
                            <h3>Channel Members</h3>
                            <ul>
                                {channelInfo.map((member) => (
                                    <li key={member.userId}>{member.username}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </Col>
                <Col className="col-12 col-md-6" id="AddChannelCol">
                    <AddChannel getChannels={getChannels}></AddChannel>
                </Col>
            </Row>
        </Container >
    );
}

export default ChannelList;
