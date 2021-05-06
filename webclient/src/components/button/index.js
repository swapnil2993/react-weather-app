import React from 'react'
import { StyledButton } from './styles'

const Button = ({
  children,
  onClick = () => {},
  type = 'button',
  isPrimary = false,
  ...rest
}) => {
  return (
    <StyledButton {...rest} onClick={onClick} isPrimary={isPrimary} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button
