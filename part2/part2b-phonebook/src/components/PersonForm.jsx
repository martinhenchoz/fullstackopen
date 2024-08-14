const PersonForm = ({ addPerson, name, handleName, number, handleNumber }) => {
    return (
        <form onSubmit={addPerson}>
        <div>
          Name: 
          <input 
            value={name}
            onChange={handleName}
          />
        </div>
        <div>
          Number: 
          <input 
            value={number}
            onChange={handleNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm