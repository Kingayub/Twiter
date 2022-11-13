const { Router } = require("express")
const route = Router()
const userRoute = require("./users.route.js")
const postRoute = require('./posts.route')
const commentsRoute = require('./comments.route')

route.use(userRoute)
route.use(postRoute)
route.use(commentsRoute)

module.exports = route
