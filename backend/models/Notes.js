const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    id: {
        type: String,
    },
    iname: {
        type: String,
    },
    price: {
        type: String,
    },
    qty: {
        type: String,
    },
    val: {
        type: String,
    },
    motherDOB: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }



});

module.exports = mongoose.model('notes', NotesSchema)