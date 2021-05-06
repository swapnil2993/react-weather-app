import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('react-spinners/BarLoader', () => () => <div>loader</div>)
jest.mock('./components/not-found', () => () => <div>not-found</div>)
jest.mock('./containers/address-form', () => () => <div>address-form</div>)

describe('App', () => {
  it('renders app with only address bar on first load', () => {
    render(<App />)
    expect(screen.getByText('address-form')).toBeInTheDocument()
  })
})
