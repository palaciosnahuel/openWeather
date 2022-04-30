export interface Forecast {
 city : {
   timezone: number
 }
 list: ForecastItem[]
}

export interface ForecastItem {
  timezone:number
  dt:number
  temp: {
      day: number
      max: number
      min: number
  }
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }]
}

export interface CurrentWeather {
  name: string;
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure:number
    humidity:number
  }
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }]
}

export interface GeolocationParameters{
  lat:number
  long:number
}