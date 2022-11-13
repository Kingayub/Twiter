const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    text: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts"
    }
})

const Comment = mongoose.model('Comments', CommentSchema)
module.exports = Comment