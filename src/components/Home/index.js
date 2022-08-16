import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const matches = await response.json()
    const update = matches.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teams: update, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="logo-container">
          <img
            className="home-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
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
          <ul className="home-teams-matches">
            <TeamCard key={teams[0].id} details={teams[0]} />
          </ul>
        )}
      </div>
    )
  }
}

export default Home
