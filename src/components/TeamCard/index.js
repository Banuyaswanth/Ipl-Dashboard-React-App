import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {name, teamImageUrl, id} = each

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-card-item">
        <img className="team-card-logo" src={teamImageUrl} alt={name} />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
