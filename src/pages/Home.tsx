import React, { useState, useEffect } from 'react'
import { Box, Flex, Button } from '@chakra-ui/react'
import CurrentWeatherCard from '../components/CurrentWeatherCard/CurrentWeatherCard'
import ForecastItemCard from '../components/ForecastItemCard/ForecastItemCard'
import { useQuery } from 'react-query';
import { getCurrentWeather, getForecast } from '../api/openWeather/openWeather';
import Loader from '../components/Loader/Loader';
import SelectBox from '../components/SelectBox/SelectBox';
import useGeolocation from 'react-hook-geolocation';
import { GeolocationParameters } from '../api/openWeather/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { getCities } from '../api/cities/Cities';

const Home = () => {

  const [selectedCity, setSelectedCity] = useState<string | GeolocationParameters>("Buenos Aires")

  const geolocation = useGeolocation()

  const { data: weatherData, isFetching: weatherIsFetched, refetch: refetchWeather } = useQuery(["getWeather", selectedCity], () => getCurrentWeather(selectedCity))
  const { data: forecastData, isFetching: forecastIsFetched, refetch: refetchForecast } = useQuery(["getForecast", selectedCity], () => getForecast(selectedCity))
  const { data: citiesData, isLoading: citiesIsLoading} = useQuery(["getForecast"], () => getCities())

  useEffect(() => {
    refetchWeather()
    refetchForecast()
  }, [selectedCity])

  const handleOnClick = () => {
    setSelectedCity({ lat: geolocation.latitude, long: geolocation.longitude })
  }

  return (
    <Box p={10} mt={"5%"} mx={"20%"} bg={"blue.800"} rounded="2xl">

      <Flex >
        <SelectBox setCity={setSelectedCity} cityList={ !citiesIsLoading ? citiesData! : [""]}/>
        <Button mx={2} my={2} onClick={handleOnClick}>
          <FontAwesomeIcon icon={faCrosshairs} />
        </Button>
      </Flex>

      <Flex justifyContent={"center"}>
        {weatherIsFetched ? <Loader /> : <CurrentWeatherCard data={weatherData!} />}
      </Flex>

      <Flex direction={'row'} justifyContent={"center"} wrap={"wrap"}>
        {
          forecastIsFetched ? <Loader /> : forecastData!.list.map((data, index) => {
            data.timezone = forecastData!.city.timezone; // Add Timezone to data Object.
            return (<ForecastItemCard key={index} data={data} />)
          })
        }
      </Flex>
    </Box>
  )
}

export default Home