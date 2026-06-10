import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
export const requireSignIn = async (req, res, next) => {

    try {
        const token = req.headers.authorization;
        const decoded = await JWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({message: 'Unauthorized'});
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(!user || user.role !== 1) {
            return res.status(403).json({message: 'Not an admin'});
        }
        next();
    } catch (error) {
        res.status(403).json(
            {
                message: 'Not an admin',
                error: error.message
            }
        );
    }
}