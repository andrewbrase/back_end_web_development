// require mongoose
const mongoose = require('mongoose');

// new mongoose schema
const Schema = mongoose.Schema;

// a sing field username with some validations 
const userSchema = new Schema({
    username: {
        // type is a string required
        type: String,
        required: true,
        // require it's unique
        unique: true,
        // trim whitespace off the end
        trim: true,
        // minimum length of 3
        minlength: 3
    },
}, {
    // create fields for when it was created and modified
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;