import alt from '../alt';
import {assign} from 'underscore';

class SearchActions{
  constructor(){
    this.generateActions(
			'updateSearch',
      'getUserInfoSuccess',
      'getUserInfoFail'
    );
  }

  getUserInfo(payload){
    $.ajax({
			url:'/api/userInfo',
			data:{
				name:payload.searchQuery
			}
		}).done((data)=>{
			assign(payload, data);
			this.getUserInfoSuccess(payload);
		}).fail((error)=>{
			this.getUserInfoFail(error);
		});
  }
}

export default alt.createActions(SearchActions);
