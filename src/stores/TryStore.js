import TryActions from '../actions/TryActions';
import alt from '../alt';

class TryStore{
	constructor(){
		this.bindActions(TryActions);
		this.searchQuery ='';
		this.userInfo = [];
		this.playerStats = [];
		this.playerAchievements =[];
	}

	onUpdateSearch(e){
		this.searchQuery = e.target.value;
	}

	onGetUserInfoSuccess(data){
		this.userInfo = data;
	}

	onGetStatesSuccess(data){
		this.playerStats = data.stats;
		this.playerAchievements = data.achievements;
		console.log(this.playerStats);
	}
}

export default alt.createStore(TryStore);