const express = require('express')
const Router = express.Router()

const signupRoute = require('./signup')
const loginRoute = require('./login')
const createEventR = require('./createEvent')
const updateRoute = require('./updateEvent')
const deleteRoute = require('./delete')
const getBYNameRoute = require('./getByName')
const getAllUserRoute = require('./allUsers')

Router.use('/', signupRoute)
Router.use('/', loginRoute)
Router.use('/', createEventR)
Router.use('/', updateRoute)
Router.use('/', deleteRoute)
Router.use('/', getBYNameRoute)
Router.use(getAllUserRoute)

module.exports = Router