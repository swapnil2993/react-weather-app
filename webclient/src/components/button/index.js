import React from 'react'
import { StyledButton } from './styles'

const Button = ({ children, onClick=()=>{}, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  )
}

export default Button
