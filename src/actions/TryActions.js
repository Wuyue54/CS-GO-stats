import alt from '../alt';

class TryActions{
	constructor(){
		this.generateActions(
			'updateSearch',
			'getStatesSuccess',
			'getStatesFail'
		);
	}

	getStates(payload){
		console.log('getting...');
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