import React from 'react'
import { Label, Input, InputWrapper } from './styles'

const InputContainer = ({
  label,
  placeholder,
  type = 'text',
  onChange,
  value,
  name,
  ...rest
}) => {
  return (
    <InputWrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input
        {...rest}
        id={label}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </InputWrapper>
  )
}

export default InputContainer
