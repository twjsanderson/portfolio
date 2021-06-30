const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(200, "Hello from Firebase!");
});

//THESE SETTINGS WORK ON LOCAL AND LIVE. BUT I DONT WANT TO USE THEM
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tom.w.j.sanderson@gmail.com',
        pass:  'Qewrt!3245'
    },
});

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

exports.sendEmail = functions.https.onRequest((data) => {
    const { email, message } = data;

    const newEmail = {
        from: 'E-Mail Adress Goes Here',
        to: email,
        subject: 'From Profile',
        text: message,
        html: message
    };
    // Function to send e-mail to the user
    transporter.sendMail(newEmail, (err, info) => {
        if (err) {
            console.log(err);
            return { success: false };
        } else {
            return { success: true }
        }
    });

})