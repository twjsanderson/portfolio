const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

exports.sendEmail = functions.https.onRequest((req, res) => {
    return cors(req, res, () => { 
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: functions.config().sendemail.email,
                pass: functions.config().sendemail.password
            }
        });
        
        // get contact form data from the req
        const email = req.body.data.email;
        const message = req.body.data.message;

        const mailOptions = {
            from: `${email}`,
            to: `tom.w.j.sanderson@gmail.com`,
            subject: 'New message from your Portfolio',
            text: `Email: ${email} \nMessage: ${message}`
        };

        // call the built in `sendMail` function and return different responses upon success and failure
        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send({
                    status: 500,
                    message: error.toString()
                });
            } else {
                return res.status(200).send({
                    status: 200,
                    message: 'message sent'
                });
            }
        });
    })
});