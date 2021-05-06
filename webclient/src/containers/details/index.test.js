import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Details from './index'

const data = {
  number: 1,
  name: 'This Afternoon',
  startTime: '2021-05-06T13:00:00-04:00',
  endTime: '2021-05-06T18:00:00-04:00',
  isDaytime: true,
  temperature: 65,
  temperatureUnit: 'F',
  temperatureTrend: null,
  windSpeed: '8 mph',
  windDirection: 'NW',
  icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
  shortForecast: 'Mostly Sunny',
  detailedForecast:
    'Mostly sunny, with a high near 65. Northwest wind around 8 mph.'
}

describe('Details', () => {
  beforeEach(() => {
    render(<Details data={data} />)
  })

  it('renders details data', () => {
    expect(screen.getByText(/8 mph NW/i)).toBeInTheDocument()
    expect(screen.getByText(/Mostly sunny, with a high near 65/i)).toBeInTheDocument()
    expect(screen.getByText(/May 6, 2021 10:00 AM/i)).toBeInTheDocument()
  })
})
