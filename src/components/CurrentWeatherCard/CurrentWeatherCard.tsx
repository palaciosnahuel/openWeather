import React from 'react'
import { Box,Flex,Image } from '@chakra-ui/react'

const CurrentWeatherCard = () => {
  return (
    <Flex  wrap={"wrap"}  justifyContent={"center"} bgGradient='linear(to-r, gray.100, gray.300)' p={5} borderRadius={5} my={1}>
      <Flex direction={'column'} mx={10}>
        Buenos Aires
        <Box>16/10 07:46hs</Box>
        <Image w={"100px"} h={"100px"} src={`http://openweathermap.org/img/wn/10d@2x.png`} />
      </Flex>
      <Flex direction={'column'} justifyContent={"space-between"} mx={10} >
        <Box>ST 99.99</Box>
        <Flex>
          <div>Maxima 99.99</div>
          <div>Minima 99.99</div>
        </Flex>
        <div>Humedad 99.99</div>
        <div>Presión 99.99</div>
      </Flex>
    </Flex>
  )
}

export default CurrentWeatherCard