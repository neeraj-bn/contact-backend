const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user nanme"],
    },
    email: {
        type: String,
        required: [true, "Please add email address"],
        unique: [true, "Email already exist"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    },
}, {
    timestamps: true
})



module.exports = mongoose.model("User", userSchema)