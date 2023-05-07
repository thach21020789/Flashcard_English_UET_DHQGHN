import connection from "../configs/DBConnection";
import bcrypt from "bcryptjs";

let findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * from account where email = ?", email, function (error, rows) {
                if (error) reject(error);
                let user = rows[0];
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    })
};

let compareUserPassword = (user, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await bcrypt.compare(password, user.password);
            if (match) resolve(true);
            else resolve("The password that you've entered is incorrect")
        } catch (e) {
            reject(e);
        }
    })
};

let findUserById = (id) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * from account where id = ?", id, function (error, rows) {
                if (error) reject(error);
                let user = rows[0];
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    })
};

let changePassword = (email, password) => {
    return new Promise((resolve, reject) => {
        try {
            let salt = bcrypt.genSaltSync(10);
            let hashedPassword = bcrypt.hashSync(password, salt)
            connection.query("UPDATE account SET password = ? WHERE email = ?", [hashedPassword, email]);
            resolve("Password is successfully changed")
        } catch (e) {
            reject(e);
        }
    })
};

let storeToken = (email, token) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("UPDATE account SET password_reset_token = ? WHERE email = ?", [token, email]);
            resolve("Token is set successfully")
        } catch (e) {
            reject(e)
        }
    })
}

let findUserByToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * from account where id = ?", token, function (error, rows) {
                if (error) reject(error);
                let user = rows[0];
                if (user.length == 0) {
                    reject("Invalid token")
                } else resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = {
    compareUserPassword: compareUserPassword,
    findUserByEmail: findUserByEmail,
    findUserById: findUserById,
    changePassword: changePassword,
    storeToken, 
    findUserByToken
};