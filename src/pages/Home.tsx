import { Container } from '@chakra-ui/react'
import React from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard/CurrentWeatherCard'

const Home = () => {
  return (
    <Container>
      <CurrentWeatherCard/>
    </Container>
  )
}

export default Home