import Country from './Country'
import Weather from './weather'

const Countries = ({ countries, handleCountry }) => {

  if (countries) {
    if (countries.length > 10) {
      return (
        <h1>Too many matches, specify another filter</h1>
      )
    } 
    
    if (countries.length === 1) {
      return (
        <div>
          <Country country={countries[0]} />
          <Weather country={countries[0]} />
        </div>
      )
    } 

    return (
      <div>
        <ul>
          { countries.map(country => (
            <li key={country.cca3}>
              {country.name.common} 
              <button onClick={ () => handleCountry(country.name.common) }>Show</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Countries