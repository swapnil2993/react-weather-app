const express = require('express');
const WeatherController = require('./controller');
const Validators = require('./validators');

class WeatherRoutes {
  constructor() {
    this._weatherController = new WeatherController();
    this._weatherValidator = new Validators();
  }

  get routes() {
    const router = express.Router();
    router.get('/address',this._weatherValidator.forecast , this._weatherController.getForecast)
    return router;
  }
}

module.exports= WeatherRoutes;