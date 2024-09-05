import { getUserIdFromToken } from "../config/jwtProvider"
import userServices from "../services/userServices";

const authenticate = async (req, res, next) => {

    try {
        const token = req.header.authorization?.split(" ")[1]
        
        if (!token) {
            return res.status(401).json({message:"No token provided"})
        }
        const userId = getUserIdFromToken(token);
        const user = userServices.findUserById(userId);
        req.user = user;
    } catch (error) {
        return res.send({error: error.message})
    }
    next();
}