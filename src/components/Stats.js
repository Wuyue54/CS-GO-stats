import React from 'react';
import StatsActions from '../actions/StatsActions';
import StatsStore from '../stores/StatsStore';
import List from './List';
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
    let statsList = [];
		let achievementsList =[];
		let statsObj ={};
		let achieveObj = {};
		this.state.playerStats.forEach((d,index)=>{
			statsList.push(<List key ={index}
								name = {d.name}
								value = {d.value}
							/>);
			statsObj[d.name] = d.value;
		});

    this.state.playerAchievements.forEach((d,index)=>{
			achievementsList.push(<List key = {index}
										name = {d.name}
										value = {d.achieved}
									/>);
			achieveObj[d.name] = d.achieved;
		});

    return(
      <div>
        {this.state.ajaxSuccessful?
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
            deathRatio = {(statsObj.total_kills/statsObj.total_deaths).toFixed(4)*100 +'%'}
            headshot = {statsObj.total_kills_headshot}
            knife = {statsObj.total_kills_knife}
            wins = {statsObj.total_wins}
            winRatio ={(statsObj.total_wins/statsObj.total_rounds_played).toFixed(4)*100 +'%'}
            mvp = {statsObj.total_mvps}
            shots = {123}
            accuracy ={100}
          />

          <h2 className ='subTitle'>Achievements</h2>
          <Achievements
            achievementSchema = {this.state.gameSchema.achievements}
            achievements ={achieveObj}
          />
        </div>
        :null}
    </div>
    );
  }

}

export default Stats;
