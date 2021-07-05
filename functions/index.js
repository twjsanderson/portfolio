const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
});

admin.initializeApp();

exports.sendEmail = functions.https.onRequest((req, res) => cors(req, res, () => emailFn(req, res)));

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

const emailFn = (req, res) => {

    // get contact form data from the req
    const email = req.body.data.email;
    const message = req.body.data.message;

    const mailOptions = {
        from: email,
        to: `tom.w.j.sanderson@gmail.com`,
        subject: 'New message from your Portfolio',
        text: `${message}`,
    };

    // call the built in `sendMail` function and return different responses upon success and failure
    return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({
                data: {
                    status: 500,
                    message: error.toString(),
                    info: info
                },
            });
        }

        return res.status(200).send({
            data: {
                status: 200,
                message: 'message sent'
            },
        });
    });
}