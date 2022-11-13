const { Router } = require("express")
const route = Router()
const { userController } = require("../controllers/users.controllers.")

route.get('/users', userController.getAllUsers)
route.get('/users/:id', userController.getUserById)
route.put('/users/:id', userController.addSaves)
route.delete('/users/:id', userController.deleteUserById)
route.post('/users', userController.addUsers)

module.exports = route
