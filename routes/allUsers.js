const express = require('express')
const Router = express.Router()
const user_auth = require('../middleware/auth')

const fetchUsersController = require('../controller/fetchAllUsers')

Router.get('/allUsers', user_auth, fetchUsersController.allUsers)

module.exports = Router