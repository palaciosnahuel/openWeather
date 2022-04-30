import React from 'react'
import { Select } from '@chakra-ui/react'

interface SelectBoxProps {
  setCity: any;
  cityList: string[];
}

const SelectBox : React.FC<SelectBoxProps> = ({setCity, cityList}) => {

  const handleOnChange = (event:any) => {
    event.preventDefault()
    setCity(event.target.value)
  }
 
  return (
    <Select value={''}  bg={"white"} my={2} onChange={handleOnChange}> 
    <option value="Choose here" selected={true} >Choose here</option>
    {cityList.map((city)=>{
      return <option value={city}>{city}</option>
    })}
    </Select>
  )
}

export default SelectBox