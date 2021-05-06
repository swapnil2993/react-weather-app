import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './index'

describe('Button', () => {
  it('renders button with correct children', () => {
    render(<Button>Hello</Button>)
    const button = screen.getByRole('button')
    expect(button).not.toHaveAttribute('disabled')
    expect(button).toHaveTextContent('Hello')
  })

  it('click event is triggered on clicking the button', () => {
    const onClick = jest.fn()
    render(
      <Button isPrimary={true} onClick={onClick}>
        Click
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).not.toHaveAttribute('disabled')
    expect(button).toHaveTextContent('Click')
    userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('click event is not triggered on clicking the disabled button', () => {
    const onClick = jest.fn()
    render(
      <Button isPrimary={true} onClick={onClick} disabled>
        Click
      </Button>
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('disabled')
    expect(button).toHaveTextContent('Click')
    userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })
})
