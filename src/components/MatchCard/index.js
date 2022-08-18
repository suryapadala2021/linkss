import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = details
   const addClass=(matchStatus==="Won"?"match-card-status-won":"match-card-status-lost")
  
  return (
    <li className="match-card-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="macth-card-compitive-logo"
      />
      <p className="match-card-competing-team">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={addClass}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
