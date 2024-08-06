import Part from "./Part"

const Content = ({parts}) => {
    return (
        <table>
            <tbody>
                {
                    parts.map(part => 
                        <Part key={part.id} part={part} />
                    )
                }
            </tbody>
        </table>
    )
}
  
export default Content  