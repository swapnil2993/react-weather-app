import React from 'react'
import Button from '../../components/button'
import InputContainer from '../../components/input/index'

import useSetFormData from './useSetFormData'
import { Form, StreetAddress, Row, Col, ButtonContainer } from './styles'

const AddressForm = ({ handleSubmit, handleReset }) => {
  const [data, dispatch] = useSetFormData()

  const isButtonDisabled = data =>
    Object.keys(data)
      .every(key => data[key] === '')

  const onSubmit = e => {
    e.preventDefault()
    if (isButtonDisabled(data)) {
      return
    }
    handleSubmit(data)
  }

  const handleChange = e => {
    dispatch({ type: e.target.name, payload: e.target.value })
  }

  const onReset = () => {
    dispatch({ type: 'RESET_FORM' })
    handleReset()
  }

  return (
    <Form onSubmit={onSubmit} onReset={onReset}>
      <StreetAddress
        value={data.street}
        name='STREET'
        label='Street Address'
        placeholder='Street Address'
        onChange={handleChange}
      />
      <Row>
        <Col>
          <InputContainer
            value={data.city}
            name='CITY'
            onChange={handleChange}
            label='City'
            placeholder='City'
          />
        </Col>
        <Col>
          <InputContainer
            name='STATE'
            value={data.state}
            onChange={handleChange}
            label='State'
            placeholder='State'
          />
        </Col>
        <Col>
          <InputContainer
            name='ZIP'
            pattern='\d*'
            maxLength={10}
            value={data.zip}
            onChange={handleChange}
            label='Zip'
            placeholder='Zip'
          />
        </Col>
      </Row>
      <ButtonContainer>
        <Button isPrimary type='submit' disabled={isButtonDisabled(data)}>
          Search
        </Button>
        <Button isPrimary={false} type='reset'>
          Reset
        </Button>
      </ButtonContainer>
    </Form>
  )
}

export default AddressForm
