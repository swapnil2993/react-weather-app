import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { NotFoundWrapper, NotfoundIcon, NotFoundText } from './styles'

const NotFound = ({ text }) => {
  return (
    <NotFoundWrapper>
      <NotfoundIcon>
        <FontAwesomeIcon icon={faFrown} />
      </NotfoundIcon>
      <NotFoundText>{text}</NotFoundText>
    </NotFoundWrapper>
  )
}

export default NotFound
