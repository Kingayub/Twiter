const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: String,
    aboutMe: String,
    saves: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }]
})

const Users = mongoose.model('Users', UserSchema)
module.exports = Users