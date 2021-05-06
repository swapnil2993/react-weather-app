const {
  getCoordinates,
  getGridProperties,
  getForecastFromGrid,
  sendAddressNotFoundEmail
} = require('./services')

class WeatherController {
  constructor () {}

  async getForecast (req, res) {
    try {
      let params = req.query
      params.benchmark = 'Public_AR_Census2020'
      params.foramt = 'json'
      let coordinates = await getCoordinates(params)
      if (coordinates === null) {
        res.status(404).json({ message: 'Address not found', data: params })
        // sendAddressNotFoundEmail(params)
        return
      }

      let grid = await getGridProperties(coordinates)
      if (grid === null) {
        res.status(404).json({ message: 'Address not found', data: params })
        return
      }

      let forecast = await getForecastFromGrid(grid)
      return res.status(200).json({
        message: 'Address found',
        data: { properties: forecast, address: params }
      })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', data: {} })
    }
  }
}

module.exports = WeatherController
