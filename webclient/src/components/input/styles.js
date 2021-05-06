import styled from '@emotion/styled'
import tw from 'twin.macro'

export const Label = styled('label')`
  ${tw`block uppercase tracking-wide text-gray-900 font-bold mb-2 pl-2`}
`
export const Input = styled('input')`
  ${tw`shadow w-full border-none rounded-2xl py-2 pl-4 pr-8 bg-white focus:outline-none`}
`

export const InputWrapper = styled('div')`
  ${tw`mt-2 mb-4`}
`