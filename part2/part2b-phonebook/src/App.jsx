import { useState, useEffect } from 'react'
import Person from './components/Person'
import Notification from './components/Notification'
import Filter from './components/Filter'
import phonebookService from './services/phonebook'
import PersonForm from './components/PersonForm'

const App = () => {

  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState({})

  useEffect(() => {
    phonebookService
      .getAll()
      .then( persons => {
        setPersons(persons)
      })
  }, [])

  
  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.filter(person => person.name === name)
    if (found.length > 0) {
      if (window.confirm(`${name} is already added to PhoneBook, replace de old number with the new one?`)) {
        const personObject = { ...found[0], number }
        console.log("Updated Person:", personObject)
        // phonebookService.update(personObject.id, personObject)
        //   .then(person => {
        //     setPersons(persons.concat(person))
        //     setMessage({
        //       text: `Number for ${name} was updated`,
        //       type: 'success'
        //     })
        //     setTimeout(() => { setMessage({}) }, 5000)
        //     setName('')
        //     setNumber('')
        //   })      
      }  
    } else {
      const personObject = { name, number }
      phonebookService.create(personObject)
      .then(person => {
        setPersons(persons.concat(person))
        setMessage({
          text: `Added '${person.name}'`,
          type: 'success'
        })
        setTimeout(() => { setMessage({}) }, 5000)
        setName('')
        setNumber('')
      })
    }
  }

  const deletePerson = ({id, name}) => {
    if (window.confirm(`Delete ${name} ?`)) {
      phonebookService
        .erase(id)
        .then( () => {
          setMessage({
            text: `'${name}' deleted`,
            type: 'success'
          })
          setPersons(persons.filter(p => p.id != id))
          setTimeout(() => { setMessage({}) }, 3000)
          setName('')
          setNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = filter 
    ? persons.filter( person => {
      var regex = new RegExp(filter, "i")
      return regex.test(person.name)
    }) 
    : persons
    
  return (
    <div>
      <h1>PhoneBook</h1>
      <Notification message={message} />
      <Filter 
        filter={filter}
        handleFilter={handleFilterChange}
      />
      {filteredPersons.map(person => 
        <Person 
          key={person.id} 
          person={person}
          handleDelete={deletePerson} 
        />
      )}
      <PersonForm 
        addPerson={addPerson}
        name={name}
        handleName={handleNameChange}
        number={number}
        handleNumber={handleNumberChange}
      />
   </div>
  )
}

export default App