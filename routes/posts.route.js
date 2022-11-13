const { Router } = require("express")
const route = Router()
const { postController } = require("../controllers/posts.controllers")

route.get('/posts', postController.getAllPosts)
route.get('/posts/:id', postController.getPostById)
route.put('/posts/:id', postController.addLike)
route.delete('/posts/:id', postController.deletePost)
route.post('/posts', postController.addPost)
route.patch('/posts/:id', postController.updatePost)

module.exports = route