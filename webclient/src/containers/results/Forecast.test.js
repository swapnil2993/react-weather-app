import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Forecast from './Forecast'

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

describe('Forecast', () => {
  let onClick
  beforeEach(() => {
    onClick = jest.fn()
    render(<Forecast data={data} isSelected={false} handleOnClick={onClick}/>)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders forecast data card', () => {
    expect(screen.getByText(/8 mph/i)).toBeInTheDocument()
    expect(screen.getByText(/65/i)).toBeInTheDocument()
    expect(screen.getByText('This Afternoon')).toBeInTheDocument()
  })

  it('renders forecast data card', () => {
    expect(screen.getByText(/8 mph/i)).toBeInTheDocument()
    expect(screen.getByText(/65/i)).toBeInTheDocument()
    expect(screen.getByText('This Afternoon')).toBeInTheDocument()
    userEvent.click(screen.getByText(/65/i))
    expect(onClick).toHaveBeenCalled()
  })
})
