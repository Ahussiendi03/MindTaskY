const express = require('express');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {upload} = require('../middleware/uploadMiddleware');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', upload.single('profilePicture'), async (req, res) => { 
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Profile picture is required' });
        }

        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashedPassword = await bycrypt.hash(password, 10);

        const newUser = await User.create({ 
            firstName,
            lastName,
            password: hashedPassword,
            email,
            profilePicture: req.file.filename,
        });

        res.json({ message: 'User registered successfully', userId: newUser._id });
        
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error' });
        
    }
});

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bycrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie( "token", token );

        res.json({ message: 'Signin successful', userId: user._id } );
        
    } catch (error) {
        console.error('Error during signin:', error);
        res.status(500).json({ message: 'Server error' });
    }
    
});

module.exports = router;