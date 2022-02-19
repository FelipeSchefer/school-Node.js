const express = require('express')
const homeRoute = require('../controllers/homeControllers')
const router = express.Router()

router.get('/', homeRoute.getHome)

module.exports = router