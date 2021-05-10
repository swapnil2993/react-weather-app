import React, { useState } from 'react'
import AddressForm from './containers/address-form'
import Results from './containers/results'
import axios from 'axios'
import queryString from 'query-string'
import BarLoader from 'react-spinners/BarLoader'
import { Layout, LayoutWrapper } from './styles'
import NotFound from './components/not-found'
import { css } from '@emotion/react'

const override = css`
  display: block;
  width: 100%;
  margin: 0 auto;
  border-color: red;
`

function App () {
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState('')

  const handleSubmit = async data => {
    setIsLoading(true)
    const query = queryString.stringify(data)
    let result
    try {
      result = await axios.get(`http://localhost:3001/api/address?${query}`)
      if (result.status === 200) {
        setResults(result.data.data)
        setIsLoading(false)
        setErrors('')
      }
    } catch (error) {
      setResults(null)
      console.log({error})
      setErrors(error?.response?.data?.message || 'Something went wrong')
      setIsLoading(false)
    }
  }

  const handleReset = e => {
    setResults(null)
    setErrors('')
    setIsLoading(false)
  }

  return (
    <LayoutWrapper>
      <Layout>
        <AddressForm handleSubmit={handleSubmit} handleReset={handleReset} />
        <BarLoader
          color='#ffffff'
          loading={isLoading}
          css={override}
          height={4}
          width={100}
        />
        {results && <Results data={results.properties} />}
        {errors !== '' && !isLoading && <NotFound text={errors} />}
      </Layout>
    </LayoutWrapper>
  )
}

export default App
