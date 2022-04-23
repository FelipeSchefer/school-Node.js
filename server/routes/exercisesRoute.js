const express = require('express')
const exercisesController = require('../controllers/exercisesController')
const router = express.Router()

router.get('/exercises', exercisesController.getExercises)

router.post('/exercises', exercisesController.postExercises)

module.exports = router