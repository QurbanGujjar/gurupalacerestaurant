const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrderPickupMethodSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    timeChoice: {
        type: String,
    },
    payment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }


})
module.exports = mongoose.model('orderPickupMethod', OrderPickupMethodSchema)