import alt from '../alt';
import StatsActions from '../actions/StatsActions';

class StatsStore{
  constructor(){
    this.bindActions(StatsActions);
    this.ajaxSuccessful = 0;
		this.userInfo = [];
		this.playerStats = [];
		this.playerAchievements =[];
		this.gameSchema ={};
  }

  onGetSchemaSuccess(data){
		this.gameSchema = data;
	}


	onGetUserInfoSuccess(data){
    console.log("this is userInfo", data);
		this.userInfo = data;
	}

	onGetStatsSuccess(data){
		this.playerStats = data.stats;
		this.playerAchievements = data.achievements;
		this.ajaxSuccessful = 1;
	}

}

export default alt.createStore(StatsStore);
