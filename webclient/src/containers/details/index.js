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

const Details = ({ data }) => {
  return (
    <DetailsContainer>
      <Time>
        {moment(data.startTime).tz('America/Los_Angeles').format('lll') } to {moment(data.endTime).tz('America/Los_Angeles').format('lll') }
      </Time>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faThermometerFull} size='3x' />
          <Text>
            {data.temperature}&#176;{data.temperatureUnit}
          </Text>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faWind} size='3x' />
          <Text>
            {data.windSpeed} {data.windDirection}
          </Text>
        </Col>
      </Row>
      <Description>{data.detailedForecast}</Description>
    </DetailsContainer>
  )
}

export default Details
