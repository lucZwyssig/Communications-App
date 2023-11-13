import axios from 'axios';
const { useState } = require("react");


function ContactForm() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/api/mail", {
                email: email,
                subject: subject,
                text: text,
            }, {
                withCredentials: true,
            });

            if (response.status === 201) {
                handleSetSuccess();
                setEmail("");
                setSubject("");
                setText("");
            }

        } catch (error) {
            
            console.log("error")
        }
    };

    function handleSetSuccess(){
        setSuccess(true);
        setInterval(() => {
            setSuccess(false);
        }, 2000);
    };



    return (
        <div className="AuthorizationForm">
            {success ? <h1>Email sent!</h1> :
                <div>
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h2>Email</h2>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <h2>Subject</h2>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>
                        <div>
                            <h2>Text</h2>
                            <textarea
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className="SubmitDiv">
                            <input type="submit" value="Send" className="AuthorizationSubmit"></input>
                        </div>
                    </form>
                </div>
                }
            </div>
            
            
    );

}; export default ContactForm;