import alt from '../alt';

class StatsActions{
  constructor(){
    this.generateActions(
      'getSchemaSuccess',
      'getSchemaFail',
      'getUserInfoSuccess',
      'getUserFail',
      'getStatsSuccess',
      'getStatsFail'
    );
  }

  getSchema(){
    $.ajax({
			url:'/api/getSchema'
		}).done((data)=>{
			this.getSchemaSuccess(data);
		}).fail((error)=>{
			this.getSchemaFail(error);
		});
  }

  getUserInfo(payload){
		$.ajax({
			url:'/api/userInfo',
			data:{
				name:payload.searchQuery
			}
		}).done((data)=>{
			this.getUserInfoSuccess(data);
		}).fail((error)=>{
			this.getUserInfoFail(error);
		});
	}

	getStats(payload){
		$.ajax({
			url: '/api/states',
			data: {
				name : payload.searchQuery
			}
		}).done((data)=>{
			this.getStatsSuccess(data);
		}).fail((error)=>{
			this.getStatsFail(error);
		});
	}

}

export default alt.createActions(StatsActions);
