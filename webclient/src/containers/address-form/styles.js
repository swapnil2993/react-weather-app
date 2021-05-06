import styled from '@emotion/styled'
import tw from 'twin.macro'
import InputContainer from '../../components/input/index'

export const Form = styled('form')`
  ${tw`w-full flex flex-col`}
`

export const StreetAddress = styled(InputContainer)`
  ${tw`w-full py-3`}
`

export const Row = styled('div')`
  ${tw`flex flex-wrap -mx-3 mb-2`}
`

export const Col = styled('div')`
  ${tw`w-full md:w-1/3 px-3 mb-6 md:mb-0`}
`

export const ButtonContainer = styled('div')`
  ${tw`flex flex-wrap justify-center my-4`}
`