const axios = require('axios')
const { emailTemplate } = require('../utils/emails')

const GEOCODING_API =
  'https://geocoding.geo.census.gov/geocoder/locations/address'

const API_WEATHER = 'https://api.weather.gov'

async function getCoordinates (params) {
  try {
    const response = await axios.get(GEOCODING_API, {
      params: params
    })
    console.log(response.data)
    let addressMatches = response.data.result.addressMatches
    let coordinates =
      addressMatches.length > 0 ? addressMatches[0].coordinates : null
    return coordinates
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function getGridProperties (coordinates) {
  let stringCoordinates = Object.values(coordinates)
    .reverse()
    .join(',')
  try {
    const response = await axios.get(
      `${API_WEATHER}/points/${stringCoordinates}`
    )
    return response.data.properties || null
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function getForecastFromGrid ({ gridY, gridX, gridId }) {
  try {
    const response = await axios.get(
      `${API_WEATHER}/gridpoints/${gridId}/${gridX},${gridY}/forecast`
    )
    return response.data.properties
  } catch (error) {
    console.error(error)
    throw error
  }
}

async function sendAddressNotFoundEmail (address) {
  const emailTemplate = emailTemplate(JSON.stringify(address))
  const mailOptions = {
    to: 'swap@yoml.com',
    html: emailTemplate,
    subject: 'Address Not Found'
  }
  const emailResult = await triggerEmail(mailOptions)
}

module.exports = {
  getCoordinates,
  sendAddressNotFoundEmail,
  getForecastFromGrid,
  getGridProperties
}
