const express = require('express')
const Router = express.Router()

const signupRoute = require('./signup')

Router.use('/', signupRoute)

module.exports = Router