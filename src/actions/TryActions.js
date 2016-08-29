import alt from '../alt';

class TryActions{
	constructor(){
		this.generateActions(
			'getStatesSuccess',
			'getStatesFail'
		);
	}

	getStates(payload){
		console.log('getting...');
		$.ajax({
			url: '/api/states',
		}).done((data)=>{
			this.getStatesSuccess(data);
		}).fail((error)=>{
			this.getStatesFail(error);
		});
	}
}

export default alt.createActions(TryActions);