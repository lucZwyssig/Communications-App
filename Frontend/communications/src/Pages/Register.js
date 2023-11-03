import RegisterForm from "../Components/Authorization/RegisterForm";
import { Container } from "react-bootstrap";

function Register() {
  

  return (
    <Container fluid className="AuthorizationContainer">
      <RegisterForm/>
    </Container>
  );
}

export default Register;
