import alt from '../alt';

class TryActions{
	constructor(){
		this.generateActions(
			'updateSearch',
			'getStatesSuccess',
			'getStatesFail',
			'getUserInfoSuccess',
			'getUserInfoFail',
			'getSchemaSuccess',
			'getSchemaFail'
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

	getStates(payload){
		//console.log('getting...');
		$.ajax({
			url: '/api/states',
			data: {
				name : payload.searchQuery
			}
		}).done((data)=>{
			this.getStatesSuccess(data);
		}).fail((error)=>{
			this.getStatesFail(error);
		});
	}
}

export default alt.createActions(TryActions);