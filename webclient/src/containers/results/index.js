import React, { useState } from 'react'
import Details from './Details'
import ForecastCard from './Forecast'
import {
  ResultContainer,
  ForecastsContainer,
  CardsContainer
} from './styles.js'

const Results = ({ data }) => {
  const [selectedForecast, setForecast] = useState(data.periods[0])
  const handleOnClick = (e, number) => {
    setForecast(data.periods.find(item => item.number === number))
  }
  return (
    <ResultContainer>
      <ForecastsContainer>
        <CardsContainer>
          {data.periods.map((item, index) => {
            return (
              <ForecastCard
                key={index}
                item={item}
                isSelected={selectedForecast.number === item.number}
                handleOnClick={handleOnClick}
              ></ForecastCard>
            )
          })}
        </CardsContainer>
        <Details item={selectedForecast} />
      </ForecastsContainer>
    </ResultContainer>
  )
}

export default Results
