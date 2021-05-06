import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddressForm from './index'

describe('AddressForm', () => {
  let handleSubmit, handleReset
  beforeEach(() => {
    handleSubmit = jest.fn()
    handleReset = jest.fn()
    render(
      <AddressForm handleSubmit={handleSubmit} handleReset={handleReset} />
    )
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders form correctly', () => {
    expect(screen.getByLabelText('Street Address')).toBeInTheDocument()
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Zip')).toBeInTheDocument()
    expect(screen.getByLabelText('State')).toBeInTheDocument()
    expect(screen.getAllByRole('button').length).toEqual(2)
  })

  it('renders form correctly and set form data correctly and then submits the data', () => {
    const streetAddress = screen.getByLabelText('Street Address')
    userEvent.type(streetAddress,'street')
    expect(streetAddress).toBeInTheDocument()

    const city = screen.getByLabelText('City')
    userEvent.type(city,'city')
    expect(city).toBeInTheDocument()

    const state = screen.getByLabelText('State')
    userEvent.type(state,'state')
    expect(state).toBeInTheDocument()

    const zip = screen.getByLabelText('Zip')
    userEvent.type(zip,'1234')
    expect(zip).toBeInTheDocument()

    userEvent.click(screen.getByRole('button',{ name: 'Search' }))
    expect(handleSubmit).toHaveBeenCalledWith({"city": "city", "state": "state", "street": "street", "zip": "1234"})

    userEvent.click(screen.getByRole('button',{ name: 'Reset' }))
    expect(handleReset).toHaveBeenCalled()
  })
})
