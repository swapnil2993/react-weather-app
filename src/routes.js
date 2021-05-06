const express = require('express')
const WeatherRoutes = require('./weather/routes')

class Routes {
  get routes () {
    const app = express()
    app.use('/', new WeatherRoutes().routes)
    return app
  }
}

module.exports = Routes
