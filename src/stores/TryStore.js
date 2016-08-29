import TryActions from '../actions/TryActions';
import alt from '../alt';

class TryStore{
	constructor(){
		this.bindActions(TryActions);
		this.playerStats = [];
		this.playerAchievements =[];
	}

	onGetStatesSuccess(data){
		this.playerStats = data.stats;
		this.playerAchievements = data.achievements;
	}
}

export default alt.createStore(TryStore);