const Notification = ({ message }) => {
  
  // Devuelve true si el objeto esta vacio
  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
  }

  if (isEmpty(message)) {
    return null
  }

  return (
    <div className={message.type}>
      {message.text}
    </div>
  )
  
}

export default Notification