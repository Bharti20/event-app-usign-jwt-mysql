const express = require('express')
const Router = express.Router()

const signupRoute = require('./signup')
const loginRoute = require('./login')
const createEventR = require('./createEvent')
const updateRoute = require('./updateEvent')

Router.use('/', signupRoute)
Router.use('/', loginRoute)
Router.use('/', createEventR)
Router.use('/', updateRoute)

module.exports = Router