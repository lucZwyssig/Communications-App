import LoginForm from "../Components/Authorization/LoginForm";
import { Container } from "react-bootstrap";

function Login() {

    return (
        <Container fluid className="AuthorizationContainer">
            <h1 style={{color: "white", height:"70px"}}>C(h)at App</h1>
            <LoginForm />
        </Container>
    );
}; export default Login;