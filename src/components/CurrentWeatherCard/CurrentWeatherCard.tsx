import React from 'react'
import { Box,Flex,Image } from '@chakra-ui/react'
import { CurrentWeather } from '../../api/openWeather/types';

interface CurrentWeatherCardProps {
  data: CurrentWeather;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({data}) => {
  return (
    <Flex  wrap={"wrap"}  justifyContent={"center"} bgGradient='linear(to-r, gray.100, gray.300)' p={5} borderRadius={5} my={1}>
      <Flex direction={'column'} mx={10} alignItems={"center"}>
        {data.name}
        <Flex alignItems={"center"}>
        <Image w={"100px"} h={"100px"} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        <Box>{data.main.temp}</Box>
        </Flex>
        {data.weather[0].description}
      </Flex>
      <Flex direction={'column'} justifyContent={"center"} mx={10} >
        <Box>{`ST ${data.main.feels_like}`}</Box>
        <Flex>
          <div>{`MX ${data.main.temp_max}`}</div>
          <div>{`MN ${data.main.temp_min}`}</div>
        </Flex>
        <div>{`HMDY ${data.main.humidity}%`}</div>
        <div>{`PSRE ${data.main.pressure}hpca`}</div>
      </Flex>
    </Flex>
  )
}

export default CurrentWeatherCard