import styled from '@emotion/styled'
import tw from 'twin.macro'

export const ResultContainer = styled('div')`
  ${tw`w-full flex flex-wrap relative py-8 justify-between`}
`

export const ForecastsContainer = styled('div')`
  ${tw`overflow-hidden my-8 w-full`}
`

export const Card = styled('div')`
  flex-basis: 150px;
	flex-grow: 0;
	flex-shrink: 0;
  ${props=> props.isSelected ? tw`bg-white text-black bg-opacity-75` : tw`bg-white bg-opacity-25 text-white`}
  ${tw`relative p-2 mx-2 rounded flex justify-center flex-col items-center space-y-2 cursor-pointer`}
`

export const CardsContainer = styled('div')`
  ${tw`flex overflow-y-hidden overflow-x-scroll mt-4`}
  scrollbar-color: lightgray #ffffff;
  scrollbar-width: thin;
`
export const Day = styled('h6')`
`

export const Image = styled('img')`
  ${tw`rounded-full w-16 h-16`}
`

export const Temparature = styled('span')`
  ${tw`font-semibold text-xl`}
`

export const DetailsContainer = styled('div')`
  ${tw`w-full relative p-2 my-4 rounded flex flex-col items-center justify-center space-y-2 text-white bg-white text-black bg-opacity-75 p-4 rounded` }
`

export const Time = styled('time')`
  ${tw`text-3xl`}
`
export const Row = styled('div')`
  ${tw`flex w-full flex-wrap mb-4`}
  @media all and (max-width: 760px) {
    ${tw`flex-col items-start`}
  }
`

export const Col =styled('div')`
  ${tw`flex items-center justify-center`}
  flex-basis: auto;
  flex: 1;
`

export const Text = styled('span')`
  ${tw`text-3xl text-3xl px-4 font-bold align-middle`}
`
export const Description = styled('p')`
  ${tw`pt-4 text-xl`}
`