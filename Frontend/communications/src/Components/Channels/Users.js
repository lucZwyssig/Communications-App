import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function Users() {

    useEffect(() => {
        getUsers();
    }, []);

    const id = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    async function getUsers() {
        try {
            const response = await axios.get(`http://localhost:3001/api/chats/${id.channelId}/users`, {
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
            {users.map((user) => <p>{user}</p>)}
        </div>
    );
}; export default Users;