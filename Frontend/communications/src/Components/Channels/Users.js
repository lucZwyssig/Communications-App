import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function Users(props) {
    const BackendURL = process.env.BACKEND_URL || "http://localhost:3001";

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        getUsers();
    }, [props.getUsers])

    const id = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    async function getUsers() {
        try {
            const response = await axios.get(`${BackendURL}/api/chats/${id.channelId}/users`, {
                withCredentials: true
            });
            if (response.status === 200) {
                setUsers(response.data.users);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                navigate("/chats/channels");
            } else {
                console.error("Unexpected response status");
            }
        }
    }
    return (
        <div className="Users">
            {users.map((user) => <p key={user}>{user} &nbsp; </p>)}
        </div>
    );
}; export default Users;