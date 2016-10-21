import React from 'react';
import StatsActions from '../actions/StatsActions';
import StatsStore from '../stores/StatsStore';
// import List from './List';
import UserInfo from './UserInfo';
import OverallStats from './OverallStats';
import Achievements from './Achievements';

class Stats extends React.Component{
  constructor(props){
    super(props);
    this.state = StatsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    console.lot('asdfasdfasdfasdf');
    let query = this.props.params.userID;
    StatsActions.getSchema();
    StatsActions.getUserInfo({
      searchQuery: query
    });
    StatsActions.getStats({
      searchQuery: query
    });
    StatsStore.listen(this.onChange);
  }

  componentDidUpdate(prevProps){
    if (prevProps.params.userID !== this.props.params.userID) {
      let query = this.props.params.userID;
      StatsActions.getUserInfo({
        searchQuery: query
      });
      StatsActions.getStats({
        searchQuery: query
      });
    }
  }

  componentWillUnmount(){
    StatsStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
  }

  render(){

		let statsObj ={};
		let achieveObj = {};
		this.state.playerStats.forEach((d,index)=>{

			statsObj[d.name] = d.value;
		});

    this.state.playerAchievements.forEach((d,index)=>{

			achieveObj[d.name] = d.achieved;
		});

    console.log(statsObj);
    return(
      <div>
         {/*this.state.ajaxSuccessful? :null*/}
        <div>
          <UserInfo
            personaname ={this.state.userInfo.personaname}
            profileurl = {this.state.userInfo.profileurl}
            imgUrl = {this.state.userInfo.avatarfull}
          />

          <h2 className = 'subTitle'>Stats</h2>
          <OverallStats
            kill = {statsObj.total_kills}
            death = {statsObj.total_deaths}
            deathRatio = {(statsObj.total_kills/statsObj.total_deaths*100).toFixed(2) +'%'}
            headshot = {statsObj.total_kills_headshot}
            knife = {statsObj.total_kills_knife}
            wins = {statsObj.total_wins}
            winRatio ={(statsObj.total_wins/statsObj.total_rounds_played*100).toFixed(2) +'%'}
            mvp = {statsObj.total_mvps}
            shots = {123}
            accuracy ={100}
          />

          <h2 className ='subTitle'>Achievements</h2>
          <Achievements
            achievementSchema = {this.state.gameSchema.achievements}
            propsAchievements ={achieveObj}
          />
        </div>

    </div>
    );
  }

}

export default Stats;
