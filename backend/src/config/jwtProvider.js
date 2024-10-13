const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const generateToken = async (userId) => {
    const token = jwt.sign({ userId: userId }, SECRET_KEY, {
        expiresIn: "1h"
    });
    // const refreshToken = jwt.sign({ userId: userId }, SECRET_KEY, {
    //     expiresIn: "7d"
    // });
    await User.findByIdAndUpdate(userId, { jwt: token });
    console.log('token',token)
    return token;
};

const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        return decodedToken.userId;
    } catch (error) {
        console.log('invalid token', error.message)
    }
};

module.exports = {
    generateToken,
    getUserIdFromToken
}


