const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    full_name: { type: String , required: true },
    class_level: { type: Number },
    stream: { type: String },
    created_at: { type: Date, default: Date.now },
    last_login : { type: Date }
})

module.exports = mongoose.model('User', UserSchema);