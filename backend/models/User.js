const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    telephone: {
        type: String,
    },
    password: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    },
});
const User = mongoose.model("user", UserSchema)
    // User.createIndexes()
module.exports = User