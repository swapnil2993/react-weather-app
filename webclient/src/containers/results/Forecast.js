import React from 'react'
import { Card, Day, Image, Temparature } from './styles'

const ForecastCard = ({ item, isSelected, handleOnClick }) => {
  return (
    <Card isSelected={isSelected} onClick={e => handleOnClick(e, item.number)}>
      <Day>{item.name}</Day>
      <Temparature>
        {item.temperature}&#176;{item.temperatureUnit}
      </Temparature>
      <Image src={item.icon} />
      <p>{item.windSpeed}</p>
    </Card>
  )
}

export default ForecastCard
