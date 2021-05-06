import React from 'react'
import {
  DetailsContainer,
  Time,
  Row,
  Col,
  Description,
  Text
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment-timezone';
import { faThermometerFull, faWind } from '@fortawesome/free-solid-svg-icons'

const Details = ({ item }) => {
  return (
    <DetailsContainer>
      <Time>
        {moment(item.startTime).tz('America/Los_Angeles').format('YYYY-MM-DD ha') } - {moment(item.endTime).tz('America/Los_Angeles').format('YYYY-MM-DD ha') }
      </Time>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faThermometerFull} size='3x' />
          <Text>
            {item.temperature}&#176;{item.temperatureUnit}
          </Text>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faWind} size='3x' />
          <Text>
            {item.windSpeed} {item.windDirection}
          </Text>
        </Col>
      </Row>
      <Description>{item.detailedForecast}</Description>
    </DetailsContainer>
  )
}

export default Details
