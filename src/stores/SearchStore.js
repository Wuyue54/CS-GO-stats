import alt from '../alt';
import SearchActions from '../actions/SearchActions';

class SearchStore{
  constructor(){
    this.bindActions(SearchActions);
    this.ajaxSuccessful = 0;
		this.searchQuery ='';
		this.userInfo = [];
  }

  onUpdateSearch(e){
		this.searchQuery = e.target.value;
	}

  onGetUserInfoSuccess(data){
		// console.log(data);
		this.userInfo = data;
		// console.log(data.history);
		data.history.push('/user/' + data.steamid);
	}

}

export default alt.createStore(SearchStore);
