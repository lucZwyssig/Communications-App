import RegisterForm from "../Components/Authorization/RegisterForm";
import { Container } from "react-bootstrap";

function Register() {
  

  return (
    <Container fluid className="AuthorizationContainer">
      <h1 style={{height: "70px", color:"white"}}>C(h)at App</h1>
      <RegisterForm/>
    </Container>
  );
}

export default Register;
