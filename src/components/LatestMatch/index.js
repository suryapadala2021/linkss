// Write your code here
import './index.css'

const LatestMatches = props => {
  const {latestMatchDetails} = props
  return (
    <div className="latest-match-box">
      <div className="latest-match-flex-box">
        <div className="latest-match-flex-text-box">
          <p className="latest-match-competing-team">
            {latestMatchDetails.competingTeam}
          </p>
          <p className="latest-match-competing-date">
            {latestMatchDetails.date}
          </p>
          <p className="latest-match-venue">{latestMatchDetails.venue}</p>
          <p className="latest-match-venue">{latestMatchDetails.result}</p>
        </div>
        <img
          className="latest-compitating-team-logo"
          src={latestMatchDetails.competingTeamLogo}
          alt={`latest match ${latestMatchDetails.competingTeam}`}
        />
      </div>
      <img
        className="latest-compitating-team-logo-lg"
        src={latestMatchDetails.competingTeamLogo}
        alt={latestMatchDetails.competingTeam}
      />
      <hr className="horizon-line" />
      <div>
        <p className="latest-match-competing-date">First Innings</p>
        <p className="latest-match-venue">{latestMatchDetails.firstInnings}</p>
        <p className="latest-match-competing-date">Second Innings</p>
        <p className="latest-match-venue">{latestMatchDetails.secondInnings}</p>
        <p className="latest-match-competing-date">Man Of The Match</p>
        <p className="latest-match-venue">{latestMatchDetails.manOfTheMatch}</p>
        <p className="latest-match-competing-date">Umpires</p>
        <p className="latest-match-venue">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatches
