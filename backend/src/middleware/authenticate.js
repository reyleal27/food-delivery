const { getUserIdFromToken } = require('../config/jwtProvider');
const userServices = require("../services/userServices");

const authenticate = async (req, res, next) => {

    try {
        const token = req.headers.authorization?.split(" ")[1]
        
        if (!token) {
            return res.status(401).json({message:"No token provided"})
        }
        const userId = getUserIdFromToken(token);
        const user = await userServices.findUserById(userId);
        req.user = user;
    } catch (error) {
        return res.send({error: error.message})
    }
    next();
}

module.exports = authenticate;