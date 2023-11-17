import { Container } from "react-bootstrap";
import Header from "../Components/Other/Header"
import ContactForm from "../Components/Other/ContactForm";
function Contact() {
    return (

        <Container fluid style={{backgroundColor: "#c9bfc2", height: "100vh", overflow: "auto"}}>
            <Header />
            <div className="ContactDiv">
            <ContactForm />
            </div>
        </Container>
    );
}; export default Contact;