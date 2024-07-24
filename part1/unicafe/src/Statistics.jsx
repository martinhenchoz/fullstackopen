import StatisticsLine from "./StatisticsLine"

const Statistics  = ({good, neutral, bad, total, points}) => {
  if (total) {
    return (
      <div>
        <h1>Statistics </h1>
        <table>
          <tbody>
            <StatisticsLine text="Good: " value={good} />
            <StatisticsLine text="Neutral: " value={neutral} />
            <StatisticsLine text="Bad: " value={bad} />
            <StatisticsLine text="Total: " value={total} />
            <StatisticsLine text="Average: " value={(points/total).toFixed(1)} />
            <StatisticsLine text="Positive: " value={(good/total*100).toFixed(1) + "%"} />
          </tbody>
        </table>
      </div>
    ) 
  } else {
    return (
      <h1>No feedback given</h1>
    )
  }

}

export default Statistics 