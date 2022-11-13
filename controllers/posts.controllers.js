const Posts = require("../models/Posts.model")

module.exports.postController = {
  addPost: (req, res) => {
    Posts.create({
      text: req.body.text,
      user: req.body.user,
    }).then((data) => {
      res.json(data)
    })
  },
  getAllPosts: (req, res) => {
    Posts.find().populate('likes').then((data) => {
      res.json(data)
    })          // Ошибка при использовании популэйт
  },
  getPostById: (req, res) => {
    Posts.findById(req.params.id).then((data) => {
      res.json(data)
    })
  },
  deletePost: (req, res) => {
    Posts.findByIdAndRemove(req.params.id).then(() => {
      res.json("Post deleted")
    })
  },
  updatePost: (req, res) => {
    Posts.findByIdAndUpdate(req.params.id, {
      text: req.body.text,
      user: req.body.user,
    }, { new: true }).then((data) => {
      res.json(data)
    })
  },
  addLike: (req, res) => {
    Posts.findByIdAndUpdate({ _id: req.params.id }, { $push: { likes: req.body.likes } }, { new: true }).then((data) => {
      res.json(data)
    })
  }
}