import TryActions from '../actions/TryActions';
import alt from '../alt';

class TryStore{
	constructor(){
		this.bindActions(TryActions);
		this.searchQuery ='';
		this.playerStats = [];
		this.playerAchievements =[];
	}

	onUpdateSearch(e){
		this.searchQuery = e.target.value;
	}

	
	onGetStatesSuccess(data){
		this.playerStats = data.stats;
		this.playerAchievements = data.achievements;
	}
}

export default alt.createStore(TryStore);