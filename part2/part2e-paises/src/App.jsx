import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
  let filteredCountries = null
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    if (!countries) {
      console.log('Fetching countries...')
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          setCountries(response.data)
        })
    }
  }, [])
  
  if (countries) {
    const regex = new RegExp(value, 'i')
    filteredCountries = value 
      ? countries.filter( country => regex.test(country.name.common))
      : countries
    console.log("Filter")
  }  

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleCountry = (countryName) => {
    setValue(countryName)
  }

  return (
    <div>
      Find countries: <input value={value} onChange={handleChange} />
      <Countries countries={filteredCountries} handleCountry={handleCountry} />
    </div>
  )
}

export default App