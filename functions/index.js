const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
});

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(200, "Hello from Firebase!");
});


exports.sendEmail = functions.https.onRequest((req, res) => cors(req, res, () => emailFn(req, res)));

//THESE SETTINGS WORK ON LOCAL AND LIVE. BUT I DONT WANT TO USE THEM
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'tom.w.j.sanderson@gmail.com',
        pass:  'Ush638#6&yc_1'
    }
});

const emailFn = (req, res) => {
    console.log(
        'from sendEmail function. The request object is:',
        JSON.stringify(req.body)
    );

    //get contact form data from the req and then assigned it to variables
    const email = req.body.data.email;
    const message = req.body.data.message;

    //config the email message
    const mailOptions = {
        from: email,
        to: `tom.w.j.sanderson@gmail.com`,
        subject: 'New message from the nodemailer-form app',
        text: `Msg: ${message}`,
    };

    //call the built in `sendMail` function and return different responses upon success and failure
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
                message: 'sent',
            },
        });
    });
}