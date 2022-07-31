// require mongoose
const mongoose = require('mongoose');

// new mongoose schema
const Schema = mongoose.Schema;

// validations are on the same line as the field
const exerciseSchema = new Schema({
    username: { type: String, required: true},
    description: { type: String, required: true},
    duration: {type: Number, required: true},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

// add the API endpoint routes so that the server can be used to perform
//  the CRUD operations - CREATE, READ, UPDATE, DELETE

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;