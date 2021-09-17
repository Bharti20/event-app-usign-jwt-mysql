const express = require('express')
const Router = express.Router()
const user_auth = require('../middleware/auth')

const updateController = require('../controller/update_events')

Router.put('/updateEventDetail/:id',user_auth, updateController.updateEvent)


module.exports = Router