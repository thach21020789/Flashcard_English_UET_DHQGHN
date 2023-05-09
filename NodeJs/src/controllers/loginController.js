import passport from "passport";
import loginService from "../services/loginService"
import bcrypt from "bcryptjs";
import transporter from "../configs/mailConfig"
import crypto from 'crypto'
import fs from 'fs';

let getLoginPage = (req, res) => {
    return res.render("login.ejs");
};

let handleLogin = (req, res, next) => {
    passport.authenticate("localLogin", function (error, user, info) {
        if (error) {
            return res.status(500).json({ error: error });
        }
        if (!user) {
            return res.status(401).json({ error: info.message });
        }
        req.login(user, function (err) {
            if (err) {
                return res.status(500).json({ error: error });
            } else {
                return res.status(200).json({ user: user });
            }
        });
    })(req, res, next);
};

let checkAuthenticate = (req, res) => {
    return res.send(req.isAuthenticated);
}

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            message: "Not logged in"
        });
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("http://localhost:3000/Home");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function (err) {
        return res.status(200).json({
            message: "Log out successfully"
        });
    });
};

let handleChangePassword = async (req, res) => {
    try {
        console.log(req.body.oldPassword, req.user.password)
        let match = await bcrypt.compare(req.body.oldPassword, req.user.password);

        if (match) {
            let message = await loginService.changePassword(req.user.email, req.body.password)
            return res.status(200).json({ message: message })
        } else {
            return res.status(401).json({ error: "Incorrect old password" })
        }
    } catch (e) {
        return res.status(500).json(e)
    }
}

let handleForgotPassword = async (req, res) => {


    try {
        const email = req.body.email;

        let m = await loginService.findUserByEmail(email)

        // Generate a random token
        const token = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash("sha256").update(token).digest('hex')
        // Store the token in the database
        await loginService.storeToken(email, hashedToken)

        // read reset password html file
        fs.readFile('../NodeJs/src/public/ResetPassword.html', 'utf8', (err, data) => {

            if (err) {
                console.error(err);
                return;
            }

            data = data.replace('<a href="http://localhost:3000/reset-password/test">Reset password</a>',
            `<a href="http://localhost:3000/reset-password/${token}">Reset password</a>`)
            const mailOptions = {
                from: 'Flash card <flashcardbruhbruh@bruh.com>',
                to: email,
                subject: 'Reset your password',
                html: data
            };


            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return res.status(500).json({ error: 'Internal server error' });
                } else {
                    console.log(info);
                    return res.json({ message: 'Check your email for a link to reset your password' });
                }
            });
        })

        // Send an email to the user with a link to reset their password

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
}

let handleResetPassword = async (req, res) => {
    const token = req.params.token;

    try {
        const hashedToken = crypto.createHash("sha256").update(token).digest('hex')
        console.log("hashed token: ", hashedToken)

        const user = await loginService.findUserByToken(hashedToken);
        console.log(user)

        // Compare the token from the request with the stored token
        // const match = await bcrypt.compare(token, storedToken);

        // if (!match) {
        //     res.status(400).json({ error: 'Invalid token' });
        //     return;
        // }

        // Hash the new password
        //const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password in the database
        await loginService.changePassword(user.email, req.body.password)

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
}

module.exports = {
    getLoginPage: getLoginPage,
    handleLogin: handleLogin,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut,
    checkAuthenticate,
    handleChangePassword: handleChangePassword,
    handleForgotPassword,
    handleResetPassword
};