import { Link } from "react-router-dom";
import LogoutForm from "../Authorization/LogoutForm";

function Header(){
    return(
        <div id="Header">
            <h3>Chat App</h3>
            <Link to="/chats/channels" className="HeaderLink">channels</Link>
            <Link to="/about" className="HeaderLink">About Us</Link>
            <Link to="/contact" className="HeaderLink">contact</Link>
            <LogoutForm/>
        </div>
    );
}; export default Header;
