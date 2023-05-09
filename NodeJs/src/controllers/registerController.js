import registerService from "../services/registerService";

let getRegisterPage = (req, res) => {
    return res.render("register.ejs");
};

let createNewUser = async (req, res) => {
    try {
        let data = {
            fullname: req.body.fullName,
            email: req.body.email,
            password: req.body.password,
            confirmedPassword: req.body.confirmedPassword
        };

        if (data.password != data.confirmedPassword) {
            return res.status(401).json({
                error: "confirmed password doesn't match password"
            })
        }
        //create a new user
        await registerService.createNewUser(data);
        return res.status(200).json({
            message: "a user create succeeds"
        })
    } catch (e) {
        return res.status(500).json({
            error: e
        });
    }
};
module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};