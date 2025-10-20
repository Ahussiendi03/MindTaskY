const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    progress: { type: Number, default: 0 },
    profilePicture: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);