const express = require('express')
const Router = express.Router()
const signupController = require('../controller/signup')

Router.post('/signup', signupController.signup)


module.exports = Router