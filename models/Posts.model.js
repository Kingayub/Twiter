const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users"
    }]
})

const Post = mongoose.model('Posts', PostSchema)
module.exports = Post