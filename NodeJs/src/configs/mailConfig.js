import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
        user: '01c7651d21b3c6',
        pass: 'aba5b490ddcb67'
    }
});

module.exports = transporter;
