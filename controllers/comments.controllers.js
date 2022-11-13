const Comment = require("../models/Comments.model")

module.exports.commentController = {
    addComment: (req, res) => {
        Comment.create({
            text: req.body.title,
            user: req.body.user,
            post: req.body.post
        }).then((data) => {
            res.json(data)
        })
    },
    getComments: (req, res) => {
        Comment.find().then((data) => {
            res.json(data)
        })
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then(() => {
            res.json("Comment deleted")
        })
    },
    updateComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            user: req.body.user,
            post: req.body.post
        }, { new: true }).then((data) => {
            res.json(data)
        })
    }
}