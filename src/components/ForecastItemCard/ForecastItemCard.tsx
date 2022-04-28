import React from 'react'
import { Box,Text,Flex,Image } from '@chakra-ui/react'
import { ForecastItem } from '../../api/openWeather/types';
import { parseDateTime } from '../../utils/DateUtils';

interface ForecastItemCardProps {
  data: ForecastItem;
}



const ForecastItemCard : React.FC<ForecastItemCardProps> = ({data}) => {

  const date = parseDateTime(data.dt,data.timezone);

  return (
    <>
    <Flex bgGradient='linear(to-r, gray.100, gray.300)' margin={2} w={165} direction={'column'} align={"center"} rounded={"lg"}>
      <Box p={5}>
      <Text align={"center"}>{data.temp.max} / {data.temp.min}</Text>
      <Text align={"center"} fontWeight={700}  fontSize='xs'>{data.weather[0].description}</Text>
      <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}  w={100} alt={"Complete"} />
      <Text align={"center"}>{date.getDate() + "/"+ date.getMonth()}</Text>
      </Box>
    </Flex>
  </> 
  )
}

export default ForecastItemCard