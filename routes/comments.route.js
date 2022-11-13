const { Router } = require("express")
const route = Router()
const { commentController } = require("../controllers/comments.controllers")

route.get('/comments', commentController.getComments)
route.delete('/comments/:id', commentController.deleteComment)
route.post('/comments', commentController.addComment)
route.patch('/comments/:id', commentController.updateComment)

module.exports = route