import styled from '@emotion/styled'
import tw from 'twin.macro'

export const DetailsContainer = styled('div')`
  ${tw`w-full relative mx-2 my-6 p-4 rounded flex flex-col items-center justify-center space-y-2 text-white bg-white text-black bg-opacity-75` }
`

export const Time = styled('time')`
  ${tw`text-lg md:text-2xl`}
`
export const Row = styled('div')`
  ${tw`flex w-full flex-wrap mb-2 md:mb-4`}
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
  ${tw`text-lg md:text-3xl px-4 font-bold align-middle`}
`
export const Description = styled('p')`
  ${tw`pt-4 text-lg md:text-xl`}
`