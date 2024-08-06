const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Area: {country.area}</p>
      <p>Capital: {country.capital}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.entries(country.languages).map( ([key, value]) => (
          <li key={key}>
            {value}
          </li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  )
}

export default Country