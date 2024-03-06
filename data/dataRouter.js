const express = require('express')
const router = express.Router()
const dataController = require('./dataController')

// router.get('/getData/:type', dataController.getData)
router.get('/getData/:type', dataController.getData)

module.exports = router