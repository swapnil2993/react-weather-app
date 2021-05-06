import styled from '@emotion/styled'
import tw from 'twin.macro'

export const NotFoundWrapper = styled('div')`
  ${tw`flex justify-center text-black items-center p-6 relative bg-white rounded-3xl opacity-75 text-center`}
  max-width: 600px;
  margin: 100px auto 0;
`

export const NotfoundIcon = styled('span')`
  ${tw`block   mr-8 text-xl`}
`

export const NotFoundText = styled('span')`
  ${tw`block text-center mr-8 text-lg`}
`