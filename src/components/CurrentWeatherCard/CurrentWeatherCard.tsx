import React from 'react'
import { Box,Flex,Image } from '@chakra-ui/react'

const CurrentWeatherCard = () => {
  return (
    <Flex justifyContent={"center"} bgGradient='linear(to-r, gray.100, gray.300)' p={5} borderRadius={5} my={1}>
      <Flex direction={'column'} mx={10}>
        Buenos Aires
        <Box>16/10 07:46hs</Box>
        <Image w={"100px"} h={"100px"} src={`http://openweathermap.org/img/wn/10d@2x.png`} />
      </Flex>
      <Flex direction={'column'} justifyContent={"space-between"} mx={10} >
        <Box>Sensación térmica</Box>
        <Flex>
          <div>99.99</div>
          <div>99.99</div>
        </Flex>
        <div>99.99</div>
        <div>99.99</div>
      </Flex>
    </Flex>
  )
}

export default CurrentWeatherCard