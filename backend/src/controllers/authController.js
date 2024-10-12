const { generateToken } = require('../config/jwtProvider');
const userService = require('../services/userServices');
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        const jwt = generateToken(user._id);
        // await cartService.createCart(user);
        return res.status(201).send({ jwt, message: "register success" });
    } catch (error) {
        return res.status(500).send({ error: error.message, message: "error here" });
    }
};
// const register = async (req, res) => {
//   try {
//     console.log('Request body:', req.body); // Log the incoming request data
//     const { fullName, email, password, role } = req.body;

//     // Validate required fields
//     if (!fullName || !email || !password) {
//       return res.status(400).send({ message: 'All fields are required' });
//     }

//     // Create a new user
//     const newUser = new User({ fullName, email, password, role });
//     await newUser.save();

//     res.status(201).send({ user: newUser });
//   } catch (err) {
//     console.error('Error creating user:', err.message); // Log the error message
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// };


const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Email or password is wrong" });
        }
        const jwt = await generateToken(user._id);
        return res.status(200).send({jwt,user: { fullName: user.fullName,email: user.email}, message: "login success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    register,
    login,
}