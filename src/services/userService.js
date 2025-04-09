import bcrypt from "bcryptjs";

import { where } from "sequelize";
import db from "../models/index";

let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let user = await checkUserEmail(email);
            if (user) {
                let checkPassword = await bcrypt.compareSync(password, user.password);
                if (checkPassword) {
                    userData.errCode = 0;
                    userData.errMessage = 'Login successful';
                    delete user.password;
                    userData.user = user;
                } else {
                    userData.errCode = 3;
                    userData.errMessage = 'Wrong password';
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = 'Your email is not registered';
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};






let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail },
                raw: true
            });
            if (user) {
                resolve(user);
            } else {
                resolve(null);
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleLogin: handleLogin
};