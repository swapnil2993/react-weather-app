import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputContainer from './index'

describe('InputContainer', () => {
  let handleChange
  beforeEach(() => {
    handleChange = jest.fn()
    render(
      <InputContainer
        value='value'
        name='name'
        onChange={handleChange}
        label='label'
        placeholder='Input'
      />
    )
  })

  afterEach(()=>{
    jest.resetAllMocks()
  })
  it('renders input and label', () => {
    const input = screen.getByLabelText('label')
    expect(input.value).toBe('value')
  })

  it('on change event is triggered', () => {
    const input = screen.getByLabelText('label')
    userEvent.type(input, '13:58')
    expect(handleChange).toHaveBeenCalled()
    expect(input.value).toBe('value')
  })
})
