import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { CurrentWeather } from '../../api/openWeather/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faArrowDown, faArrowUp, faGauge, faTemperature0 } from '@fortawesome/free-solid-svg-icons'
interface CurrentWeatherCardProps {
  data: CurrentWeather;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ data }) => {
  return (
    <Flex wrap={"wrap"}  bgGradient='linear(to-r, gray.100, gray.300)' p={5} borderRadius={5} my={1}>
      <Flex direction={'column'} mx={10} alignItems={"center"}>
        <Text fontWeight={700} fontSize={"xl"}>{data.name}</Text>
        <Flex alignItems={"center"}>
          <Image w={"100px"} h={"100px"} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
          <Box fontWeight={700} fontSize={"xx-large"}>{`${Math.round(data.main.temp)}°`}</Box>
        </Flex>
        <Text fontWeight={700}>
         {data.weather[0].description}
        </Text>
      </Flex>
      <Flex direction={'column'} justifyContent={"space-evenly"} mx={10} >
        <Box>
          <FontAwesomeIcon icon={faTemperature0} />
          {` ${Math.round(data.main.feels_like)}°`}
        </Box>
        <Flex>
          <Text px={1}>
            <FontAwesomeIcon icon={faArrowUp} />
            {` ${data.main.temp_max}°`}
          </Text>
          <Text px={1}>
            <FontAwesomeIcon icon={faArrowDown} />
            {` ${data.main.temp_min}°`}
          </Text>
        </Flex>
        <div><FontAwesomeIcon icon={faDroplet} />{` ${data.main.humidity}%`}</div>
        <div><FontAwesomeIcon icon={faGauge} />{` ${data.main.pressure} hpca`}</div>
      </Flex>
    </Flex>
  )
}

export default CurrentWeatherCard