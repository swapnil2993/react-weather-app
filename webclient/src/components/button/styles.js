import styled from "@emotion/styled";
import tw from 'twin.macro'

export const StyledButton = styled('button')`
  ${props=> props.isPrimary ? tw`hover:bg-gray-700 bg-gray-800 text-white` : tw`hover:bg-gray-100 bg-gray-400 text-black` }
  ${tw`shadow rounded-2xl font-bold py-2 px-12 mx-4 disabled:opacity-75 opacity-100`}
`