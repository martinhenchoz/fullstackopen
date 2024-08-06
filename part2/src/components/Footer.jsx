const Footer = ({parts}) => {

    const total = parts.reduce( 
        (total, part) => total += part.exercises, 0 
    )

    return (
        <h3>Total of {total} exercises</h3>
    )
}
  
export default Footer  