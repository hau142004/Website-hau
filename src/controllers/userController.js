import userService from "../services/userService"

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let passwork = req.body.passwork;

    if (!email || !passwork) {
        return res.status(500).json({
            errCode: 1,
            message: 'missing inputs parameter!'

        })
    }

    let userData = await userService.handleLogin(email, passwork);
    return res.status(200).json({
        message: userData.errMessage,
        errCode: userData.errCode,
        userData

    })
}



module.exports = {
    handleLogin: handleLogin
}