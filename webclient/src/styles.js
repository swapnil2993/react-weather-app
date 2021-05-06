import styled from '@emotion/styled'
import tw from 'twin.macro'
import BackgroundImg from './images/bg.jpeg'

export const Layout = styled('div')`
  ${tw`container m-auto p-8`}
`

export const LayoutWrapper = styled('div')`
  ${tw`min-h-screen relative w-full h-full`}
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
` 