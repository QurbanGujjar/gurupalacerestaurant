const mongoose = require("mongoose");
const mongooURL = "mongodb://localhost:27017/gurupalace"

const connectToMongoo = () => {
    mongoose.connect(mongooURL, () => {
        console.log("Connect to Mongo Successfully" + Date.now())
    })
}

module.exports = connectToMongoo;