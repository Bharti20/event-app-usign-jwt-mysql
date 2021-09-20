const express = require('express')
const Router = express.Router()
const getByNameController = require('../controller/getByName')

Router.get('/getBYName', getByNameController.getByName)


module.exports = Router