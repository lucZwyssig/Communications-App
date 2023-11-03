import LoginForm from "../Components/Authorization/LoginForm";
import { Container } from "react-bootstrap";

function Login(){
    
    return(
        <Container fluid className="AuthorizationContainer">
        <LoginForm/>
        </Container>
    );
}; export default Login;