import { Container, Table } from "react-bootstrap";
import Header from "../Components/Other/Header";
import { Link } from "react-router-dom";

function AboutUs(){
    return(
        <Container fluid className="AboutContainer">
            <Header/>
                <h1>C(h)at App, an App for effortless Communication</h1>
                <p>This app is a school project for the Berufsbildnerschule Winterthur (BBW), designed and created by Luc Zwyssig in the third year of 
                    the Informatikmittelschule (IMS) 
                </p>
                <h2>Implementation</h2>
                <div>
                <p>The project was created with React in the frontend and Nodejs express in the backend. The backend has a database connection to 
                    a MongoDB database running in a containerized environment in docker.
                </p>
                <p>
                    The app uses authentication and authorization mechanisms to ensure secure user access. The backend follows RESTful principles, providing a scalable API.
                </p>
                </div>
                <h2>Documentation</h2>
                <p>The whole Project has been documented on Github <Link to={"https://github.com/lucZwyssig/Communications-App"}>under this link</Link></p>
                <Table className="Footer" responsive variant="dark">
                    <thead>
                        <tr>
                            <th scope="col">Kontakt</th>
                            <th scope="col">Github</th> 
                            <th scope="col">Copyright</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>luc.zwyssig@lernende.bbw.ch</td>
                            <td>Username: lucZwyssig</td>
                            <td>Luc Zwyssig</td>
                        </tr>
                        <tr>
                            <td>luc.zwyssig@stud.kbw.ch</td>
                            <td>Repo: Communications-App</td>
                            <td>cc cr</td>
                        </tr>
                    </tbody>
            </Table>
        </Container>
    );
}; export default AboutUs;