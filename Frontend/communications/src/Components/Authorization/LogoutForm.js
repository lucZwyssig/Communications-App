import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
function LogoutForm(){
    const [cookie, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    function logout(){
        removeCookie("jwtToken", { path: '/', domain: "localhost"});
        navigate("/");        
    };
    return(
        <input type="button" id="LogoutButton" onClick={() => logout()} value="logout"></input>
    );   
}; export default LogoutForm;