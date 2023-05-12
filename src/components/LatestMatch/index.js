import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  console.log(props)
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  console.log(latestMatch.umpires)

  return (
    <>
      <p className="latest-match-side-heading">Latest Matches</p>
      <div className="latest-match-details-container">
        <div className="responsive-latest-match-container">
          <div className="competing-team-match-team-details">
            <p className="competing-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            className="latest-match-logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="innings-details">
          <p className="horizontal-line" />
          <h1>First Innings</h1>
          <p>{firstInnings}</p>
          <h1>Second Innings</h1>
          <p>{secondInnings}</p>
          <h1>Man Of The Match</h1>
          <p>{manOfTheMatch}</p>
          <h1>Umpires</h1>
          <p>{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
