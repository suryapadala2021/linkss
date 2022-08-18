import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {isLoading: true, matchObj: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const update = {
      recentMatches: data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      })),
      latestMatchDetails: {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({isLoading: false, matchObj: update})
  }

  render() {
    const {match} = this.props
    const {id} = match.params
    const {isLoading, matchObj} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchObj
    return (
      <div className="team-matches-container">
        {isLoading && (
          <div testid="loader">
            <Loader
              className="loader"
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
            />{' '}
          </div>
        )}
        {!isLoading && (
          <>
            <img src={teamBannerUrl} alt="team banner" className="team-banner-img" />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-list">
              {recentMatches.map(each => (
                <MatchCard key={each.id} details={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
