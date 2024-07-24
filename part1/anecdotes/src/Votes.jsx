const Votes = ({anecdotes, points, voted}) => {
  console.log(voted);
  if (voted == -1) {
    return (
      <div>
        <h1>No votes yet</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>
          {anecdotes[voted]} <br />
          has {points[voted]} votes
        </p>
      </div>
    )  
  }
}

export default Votes