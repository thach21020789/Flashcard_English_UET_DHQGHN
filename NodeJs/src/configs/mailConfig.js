import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
        user: '7884883a76e151',
        pass: '5fd7abaf375b03'
    }
});

module.exports = transporter;
