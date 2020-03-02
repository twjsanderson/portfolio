const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const email = functions.config().gmail.email;
const password = functions.config().gmail.password;

exports.submit = functions.https.onRequest((req, res) => {

    cors(req, res, () => {
        if (req.method !== 'POST') {
            return res.status(405).json({
                message: 'Request method not allowed'
            });
        };

        const mailTransport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: email,
                pass: password
            }
        });

        const mailOptions = {
            from: req.body.email,
            to: email,
            subject: `Message from Portfolio contact form`,
            html: `<p>${req.body.message}</p>`
        };

        return mailTransport.sendMail(mailOptions).then(info => {
            return res.status(200).json({
                message: 'message sent!'
            });
        }).catch(error => {
            return res.status(500).json({
                message: error
            });
        })
    });         
});
