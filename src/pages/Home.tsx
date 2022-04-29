import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard/CurrentWeatherCard'
import ForecastItemCard from '../components/ForecastItemCard/ForecastItemCard'
import { useQuery } from 'react-query';
import { getCurrentWeather, getForecast } from '../api/openWeather/openWeather';
import Loader from '../components/Loader/Loader';

const Home = () => {

  const {data : weatherData, isFetched: weatherIsFetched } = useQuery(["getWeather"], () => getCurrentWeather("Buenos Aires"))
  const {data : forecastData, isFetched: forecastIsFetched } = useQuery(["getForecast"], () => getForecast("Buenos Aires"))

  return (
    <Box p={10} mt={"5%"} mx={"20%"} bg={"blue.800"} rounded="2xl">
      
      <Flex justifyContent={"center"}>
        {weatherIsFetched ? <CurrentWeatherCard data={weatherData!} /> : <Loader/> } 
      </Flex>

      <Flex direction={'row'} justifyContent={"center"} wrap={"wrap"}>
        {
          forecastIsFetched ? forecastData!.list.map( (data)=> {
            data.timezone = forecastData!.city.timezone; // Add Timezone to data Object.
            return (<ForecastItemCard data={data}/>)
          }) : <Loader/> 
        }
      </Flex>

    </Box>
  )
}

export default Home