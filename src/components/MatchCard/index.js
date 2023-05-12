import './index.css'

const MatchCard = props => {
  const {each} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = each

  const winOrLoss = matchStatus === 'Lost' ? 'loss' : 'won'

  return (
    <li className="recent-match-container">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={winOrLoss}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
