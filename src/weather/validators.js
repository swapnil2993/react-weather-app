const handleErrors = require('../utils/errorHandler')

class Validators {
  async forecast (req, res, next) {
    if (
      !(
        req.query.street &&
        ((req.query.state && req.query.city) || req.query.zip)
      )
    ) {
      let message = 'Specify street with city and state or zip'
      return res.status(422).json({ message: message, data: {} })
    }
    next()
  }
}

module.exports = Validators
