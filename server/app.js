const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', 'views')

const exercisesRoute = require('./routes/exercisesRoute')
const loginRoute = require('./routes/loginRoute')
const homeRoute = require('./routes/homeRoute')

app.use(bodyParser.urlencoded({extended: false}))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'))
app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js/'))

app.use(exercisesRoute)
app.use(loginRoute)
app.use(homeRoute)

app.listen(3000)

