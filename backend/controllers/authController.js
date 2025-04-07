
const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { email, upi_id, password } = req.body;

        const existingUser = await User.findOne({ upi_id });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ email, upi_id, password });
        await newUser.save();

        res.status(200).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = async (req, res) => {
    res.send('Login handler not implemented yet.');
};

exports.getUser = async (req, res) => {
    res.send('Get user handler not implemented yet.');
};
