import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`} id="link-dec">
      <li className="team-card-item">
        <img src={teamImageUrl} alt={name} className="team-card-img" />
        <p className="team-card-title">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
