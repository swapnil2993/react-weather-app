import React from 'react'
import { Card, Day, Image, Temparature } from './styles'

const ForecastCard = ({ data, isSelected, handleOnClick }) => {
  return (
    <Card isSelected={isSelected} onClick={e => handleOnClick(e, data.number)}>
      <Day>{data.name}</Day>
      <Temparature>
        {data.temperature}&#176;{data.temperatureUnit}
      </Temparature>
      <Image src={data.icon} />
      <p>{data.windSpeed}</p>
    </Card>
  )
}

export default ForecastCard
