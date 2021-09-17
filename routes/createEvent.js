const express = require('express')
const Router = express.Router()
const user_auth = require('../middleware/auth')

const createEventController = require('../controller/create_event')
Router.post('/user/createEvent',user_auth, createEventController.createEvent)

module.exports = Router