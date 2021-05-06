const createError = require('http-errors')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const path = require('path')
const Middlewares = require('./middleware')

let app = express()

app.use(helmet({ contentSecurityPolicy: false }))
app.disable('x-powered-by')
app.set('view-engine', 'jade')

app.use(express.static(path.join(__dirname, '../webclient/build')))
app.use(cors())
app.options('*', cors())
app.use(Middlewares.configuration)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../webclient/build/index.html'))
})

module.exports = app
