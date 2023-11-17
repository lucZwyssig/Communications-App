import { Link } from "react-router-dom";
import LogoutForm from "../Authorization/LogoutForm";
import cat from "../../Images/cat-logo-min.png";

function Header(){
    return(
        <div id="Header">
            <h3>C(h)at App</h3>
            <img src={cat} style={{height: "30px"}}></img>
            <Link to="/chats/channels" className="HeaderLink">channels</Link>
            <Link to="/about" className="HeaderLink">About Us</Link>
            <Link to="/contact" className="HeaderLink">contact</Link>
            <LogoutForm/>
        </div>
    );
}; export default Header;
