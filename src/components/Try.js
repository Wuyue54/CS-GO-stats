import React from 'react';
import TryActions from '../actions/TryActions';
import TryStore from '../stores/TryStore';
import List from './List';

class Try extends React.Component{
	constructor(props){
		super(props);
		this.state = TryStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		TryStore.listen(this.onChange);
	}

	componentWillUnmount(){
		TryStore.unlisten(this.onChange);
	}

	onChange(state){
		this.setState(state);
	}

	handleSubmit(e){
		e.preventDefault();
		TryActions.getStates();
		console.log(this.state);
	}

	render(){
		let statsList = [];
		let achievementsList =[];
		this.state.playerStats.forEach((d,index)=>{
			statsList.push(<List key ={index}
								name = {d.name}
								value = {d.value}
							/>);
		});

		this.state.playerAchievements.forEach((d,index)=>{
			achievementsList.push(<List key = {index}
										name = {d.name}
										value = {d.achieved}
									/>)
		});
		
		return(
			

			<div>
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<button onClick={this.handleSubmit.bind(this)}>GO</button>
				</form>
				{statsList}
				{achievementsList}
			</div>
		);
	}
}

export default Try;