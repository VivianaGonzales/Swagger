const express = require('express')
const logger = require('morgan')
const swagger = require ('./utils/swagger')

require('dotenv').config()

const app = express()

swagger('/swagger',app)
app.use(logger('dev'))
app.use(express.json())

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const {connect} = require('./db/connect')

app.use('/index', indexRouter)
app.use('/api', apiRouter)
connect()


module.exports = app