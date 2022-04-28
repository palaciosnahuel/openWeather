import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard/CurrentWeatherCard'
import ForecastItemCard from '../components/ForecastItemCard/ForecastItemCard'
import { useQuery } from 'react-query';
import { getCurrentWeather } from '../api/openWeather/openWeather';

const Home = () => {

  
  const {data, isFetched} = useQuery(["getWeather"], () => getCurrentWeather("Buenos Aires"))

  return (
    <Box p={10} mt={"5%"} mx={"20%"} bg={"red.300"} rounded="2xl">
      <Flex justifyContent={"center"}>
        {isFetched && <CurrentWeatherCard data={data!} />} 
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