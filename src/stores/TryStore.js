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
		console.log(this.userInfo);
		this.userInfo = data;
		console.log(this.userInfo);
	}

	onGetStatesSuccess(data){
		this.playerStats = data.stats;
		this.playerAchievements = data.achievements;
	}
}

export default alt.createStore(TryStore);