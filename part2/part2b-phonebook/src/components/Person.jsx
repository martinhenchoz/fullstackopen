const Person = ({ person, handleDelete }) => {  
  return (
    <div className='person'>
      {person.name} {person.number}
      <button onClick={() => handleDelete(person)}>Delete</button>
    </div>
  )
}

export default Person