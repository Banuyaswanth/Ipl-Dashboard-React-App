import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrlState: '',
    latestMatchDetailsState: {},
    recentMatchesState: [],
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(updatedData)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData
    const updatedTeamBannerUrl = teamBannerUrl
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const updatedRecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    console.log(updatedTeamBannerUrl)
    console.log(updatedLatestMatchDetails)
    console.log(updatedRecentMatches)

    this.setState({
      teamBannerUrlState: updatedTeamBannerUrl,
      isLoading: false,
      latestMatchDetailsState: updatedLatestMatchDetails,
      recentMatchesState: updatedRecentMatches,
    })
  }

  render() {
    const {
      isLoading,
      teamBannerUrlState,
      latestMatchDetailsState,
      recentMatchesState,
    } = this.state
    return (
      <div className="team-matches-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-component-container">
            <img src={teamBannerUrlState} alt="team banner" />
            <LatestMatch latestMatch={latestMatchDetailsState} />
            <ul className="recent-matches-container">
              {recentMatchesState.map(each => (
                <MatchCard each={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
