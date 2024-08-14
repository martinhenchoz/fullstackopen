const Filter = ({filter, handleFilter}) => {
    return (
      <div className='filter'>
        Filter shown with: 
        <input 
          value={filter}
          onChange={handleFilter}
        />
      </div>
    )
}

export default Filter