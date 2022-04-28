export interface Forecast {
 list: ForecastItem[]
}

export interface ForecastItem {
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
  }
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }]
}