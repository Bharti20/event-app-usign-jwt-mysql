const express = require('express')
const Router = express.Router()
const loginController = require('../controller/login')

Router.get('/user/login', loginController.logIn)

module.exports = Router