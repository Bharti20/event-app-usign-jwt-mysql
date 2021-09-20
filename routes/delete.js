const express = require('express')
const Router = express.Router()
const user_auth = require('../middleware/auth')
const deleteController = require('../controller/delete_event')

Router.delete('/events/delete/:id', user_auth, deleteController.deleteEvent)

module.exports = Router