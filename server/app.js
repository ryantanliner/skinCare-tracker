const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const productRouter = require('./controllers/products')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const loggers = require('./utils/loggers')
const mongoose = require('mongoose')
const morgan = require('morgan')


mongoose.set('strictQuery', false)

loggers.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    loggers.info('connected to MongoDB')
  })
  .catch((error) => {
    loggers.error('error connecting to MongoDB:', error.message)
  })


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(morgan('tiny'))

app.use('/api/products', productRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app