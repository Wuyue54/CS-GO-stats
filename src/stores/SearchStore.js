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
		this.userInfo = data;
		data.history.push('/user/' + data.steamid);
	}

}

export default alt.createStore(SearchStore);
