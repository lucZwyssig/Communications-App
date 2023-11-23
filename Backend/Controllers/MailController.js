const nodemailer = require("nodemailer");
require('dotenv').config();




const transport = nodemailer.createTransport({
    host: process.env.NODEMAILHOST,
    port: 2525,
    auth: {
        user: process.env.NODEMAILUSER,
        pass: process.env.NODEMAILPASSWORD,
    }
});

const sendMail = (req, res) => {

    try {
        const { email, subject, text } = req.body;
        if (!email || !subject || !text) {
            return res.sendStatus(400);
        };

        const mailoptions = {
            from: email,
            to: process.env.EMAIL,
            subject: subject,
            text: text,
        };

        transport.sendMail(mailoptions, (error, info) => {
            if (error) {
                console.error(error);
            }
        });

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }


};

module.exports = {
    sendMail,
};