import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard/CurrentWeatherCard'
import ForecastItemCard from '../components/ForecastItemCard/ForecastItemCard'

const Home = () => {

  return (
    <Box p={10} mt={"5%"} mx={"20%"} bg={"red.300"} rounded="2xl">
      <Flex justifyContent={"center"}>
      <CurrentWeatherCard/>
      </Flex>
      
      <Flex direction={'row'} justifyContent={"center"} wrap={"wrap"}>
        <ForecastItemCard/>
        <ForecastItemCard/>
        <ForecastItemCard/>
        <ForecastItemCard/>
        <ForecastItemCard/>
      </Flex>
     
    </Box>
  )
}

export default Home