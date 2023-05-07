import passport from "passport";
import loginService from "../services/loginService"
import bcrypt from "bcryptjs";

let getLoginPage = (req, res) => {
    return res.render("login.ejs");
};

let handleLogin = (req, res, next) => {
    passport.authenticate("localLogin", function (error, user, info) {
        if (error) {
            return res.status(500).json(error);
        }
        if (!user) {
            return res.status(401).json(info.message);
        }
        req.login(user, function (err) {
            if (err) {
                return res.status(500).json(error);
            } else {
                return res.status(200).json(user);
            }
        });
    })(req, res, next);
};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function (err) {
        return res.redirect("/login");
    });
};

let handleChangePassword = async (req, res) => {
    try {
        console.log(req.body.oldPassword, req.user.password)
        let match = await bcrypt.compare(req.body.oldPassword, req.user.password);

        if (match) {
            let message = await loginService.changePassword(req.user.email, req.body.password)
            return res.status(200).json(message)
        } else {
            return res.status(401).json("Incorrect old password")
        }
    } catch (e) {
        return res.status(500).json(e)
    }
}

let handleForgotPassword = async (req, res) => {
    const { email } = req.body.email;

    try {
        // Generate a random token
        const token = await bcrypt.genSalt(16);

        // Store the token in the database
        await loginService.storeToken(email, token)

        // Send an email to the user with a link to reset their password
        const mailOptions = {
            from: 'yourgmailusername@gmail.com',
            to: email,
            subject: 'Reset your password',
            html: `<p>Click <a href="http://localhost:3000/reset-password/${token}">here</a> to reset your password.</p>`
        };

        console.log("reset password url: ", `http://localhost:3000/reset-password/${token}`)

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                console.log(info);
                res.json({ message: 'Reset password email sent' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

let handleResetPassword = async (req, res) => {
    const token = req.params.token;

    try {
        // Retrieve the token from the database
        const user = await loginService.findUserByToken(token);
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
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getLoginPage: getLoginPage,
    handleLogin: handleLogin,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut,
    handleChangePassword: handleChangePassword,
    handleForgotPassword,
    handleResetPassword
};