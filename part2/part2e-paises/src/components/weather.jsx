import axios from "axios"
import { useState, useEffect } from "react"

const Weather = ({ country }) => {

  const lat = country.capitalInfo.latlng[0]
  const lon = country.capitalInfo.latlng[1]
  const weatherLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b8194afc74419c42e4d643ddf0e35601&units=metric`
  
  const [weather, setWeather] = useState(null);
  console.log("Country:", country)

  useEffect(() => {
    if (!weather) {
      axios.get(weatherLink).then( response => {
        setWeather(response.data)
        console.log("Weather:", response.data)
      })
    }
  }, [])

  if (weather) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    return (
      <div>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {weather.main.temp} Celsius</p>
        <img src={iconUrl} />
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    )    
  } else {
    return (
      <div>
        <h2>No information for {country.capital}</h2>
      </div>
    )
  }
}

export default Weather