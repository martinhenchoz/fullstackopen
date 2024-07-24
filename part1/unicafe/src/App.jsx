import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)
  
  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setPoints(points + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setPoints(points - 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button 
        onClick={increaseGood}
        text="Good" 
      />
      <Button 
        onClick={increaseNeutral}
        text="Neutral" 
      />
      <Button 
        onClick={increaseBad}
        text="Bad" 
      />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        points={points} 
      />
    </div>
  )
}

export default App