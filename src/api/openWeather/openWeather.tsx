import axios from "axios";
import { CurrentWeather , Forecast } from './types';


// Api Configs.
const URL = "https://api.openweathermap.org/data/2.5/"
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
const COUNT = 5

// Api DOC https://openweathermap.org/forecast16
export const getForecast = async (city:string) => {
  let url = `${URL}/forecast/daily?q=${city}&appid=${apiKey}&units=metric&cnt=${COUNT}`;
  const {data} = await axios.get<Forecast>(url);
  return data;
};

// API DOC https://openweathermap.org/current
export const getCurrentWeather = async (city:string) => {
  let url = `${URL}/weather?q=${city}&appid=${apiKey}&units=metric`;
  const {data} = await axios.get<CurrentWeather>(url);
  return data;
};
