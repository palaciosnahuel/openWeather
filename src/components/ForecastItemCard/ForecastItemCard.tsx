import React from 'react'
import { Center,Box,Text,Flex,Image } from '@chakra-ui/react'

const ForecastItemCard = () => {
  return (
    <>
    <Flex bgGradient='linear(to-r, gray.100, gray.300)' margin={2} w={155} direction={'column'} align={"center"} rounded={"lg"}>
      <Box p={5}>
      <Text fontWeight={400} as='i' fontSize='md'>{"Lluvias"}</Text>
      <Text>{"99.99"} / {"99.99"}</Text>
      <Image src={`http://openweathermap.org/img/wn/10d@2x.png`}  w={100} alt={"Complete"} />
      <Text>23/04</Text>
      </Box>
    </Flex>
  </> 
  )
}

export default ForecastItemCard