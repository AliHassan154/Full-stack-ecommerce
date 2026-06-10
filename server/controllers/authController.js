import userModel from '../models/userModel.js';
import { hashPassword } from '../helpers/authHelper.js';
import { comparePassword } from '../helpers/authHelper.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
    const {name, email, password, phone, address} = req.body;
    if(!name || !email || !password || !phone || !address) {
        return res.status(400).json({message: 'All fields are required'});
    }

    const user = await userModel.findOne({email});
    if(user) {
        return res.status(400).json({message: 'User already exists'})
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await new userModel({name, email, password: hashedPassword, phone, address}).save();
    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        newUser: {
            name: newUser.name,
            email: newUser.email,
            phone: newUser.phone,
            address: newUser.address,
            role: newUser.role
        }
    });
}

export const loginController = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).json({message: 'Email and password are required'});
    }
    const user = await userModel.findOne({email});
    if(!user) {
        return res.status(400).json({message: 'User not found'})
    }
    const match = await comparePassword(password, user.password);
    if(!match) {
        return res.status(400).json({message: 'Invalid password'})
    }
    const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        user: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role
        },
        token
    });
}

export const testController = async (req, res) => {
    console.log("Protected route accessed");
    res.status(200).json({message: 'Protected route accessed successfully'});
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1) {
            return res.status(403).json({message: 'Not an admin'});
        }
        next();
    } catch (error) {
        res.status(403).json({message: 'Forbidden'});
    }
}

export const forgotPasswordController = async (req, res) => {
    const {email, answer, newPassword} = req.body;
    if(!email){
        return res.status(400).json({message: 'Email is required'});
    }
    if(!answer){
        return res.status(400).json({message: 'Answer is required'});
    }
    if(!newPassword){
        return res.status(400).json({message: 'New password is required'});
    }
    const user = await userModel.findOne({email, answer});
    if(!user){
        return res.status(400).json({message: 'Wrong email or answer'});
    }
    const hashedPassword = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, {password: hashedPassword});
    res.status(200).json({
        success: true,
        message: 'Password updated successfully'
    });
}
