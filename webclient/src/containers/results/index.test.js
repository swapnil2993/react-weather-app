import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Results from './index'

const data = {
  periods: [
    {
      number: 1,
      name: 'This Afternoon',
      startTime: '2021-05-06T13:00:00-04:00',
      endTime: '2021-05-06T18:00:00-04:00',
      isDaytime: true,
      temperature: 70,
      temperatureUnit: 'F',
      temperatureTrend: null,
      windSpeed: '8 mph',
      windDirection: 'NW',
      icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
      shortForecast: 'Mostly Sunny',
      detailedForecast:
        'Forecast-1-details'
    },
    {
      number: 2,
      name: 'Tonight',
      startTime: '2021-05-06T13:00:00-04:00',
      endTime: '2021-05-06T18:00:00-04:00',
      isDaytime: true,
      temperature: 75,
      temperatureUnit: 'F',
      temperatureTrend: null,
      windSpeed: '8 mph',
      windDirection: 'NW',
      icon: 'https://api.weather.gov/icons/land/day/sct?size=medium',
      shortForecast: 'Mostly Sunny',
      detailedForecast:
        'Forecast-2-details'
    }
  ]
}

describe('Results', () => {
  beforeEach(() => {
    render(<Results data={data} />)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders results correctly', () => {
    expect(screen.getByText(/8 mph NW/i)).toBeInTheDocument()
    expect(screen.getByText('Forecast-1-details')).toBeInTheDocument()
  })

  it('renders results data and selects a forecast for details', () => {
    act(()=>{
      userEvent.click(screen.getByText('Tonight'))
    })

    expect(screen.getByText('Forecast-2-details')).toBeInTheDocument()
  })
})
