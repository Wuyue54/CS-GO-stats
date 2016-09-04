import React from 'react';
import TryActions from '../actions/TryActions';
import TryStore from '../stores/TryStore';
import List from './List';
import UserInfo from './UserInfo';
import OverallStats from './OverallStats';

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
		
		let searchQuery = this.state.searchQuery.trim();

		if(searchQuery){
			TryActions.getStates({
				searchQuery:searchQuery,
				searchForm: this.refs.searchForm
			});
			TryActions.getUserInfo({
				searchQuery: searchQuery,
				searchForm: this.refs.searchForm
			})
		}
	}

	render(){
		let statsList = [];
		let achievementsList =[];
		let statsObj ={};
		let achieveObj = {};
		this.state.playerStats.forEach((d,index)=>{
			statsList.push(<List key ={index}
								name = {d.name}
								value = {d.value}
							/>);
			statsObj[d.name] = d.value;
		});
		console.log(statsObj);

		this.state.playerAchievements.forEach((d,index)=>{
			achievementsList.push(<List key = {index}
										name = {d.name}
										value = {d.achieved}
									/>);
			achieveObj[d.name] = d.value;
		});
		
		return(
			

			<div>
				<form ref = 'searchForm' onSubmit = {this.handleSubmit.bind(this)}>
					<input type ='text'	placeholder = 'Please type your 64 bit steam id' value = {this.state.searchQuery} onChange = {TryActions.updateSearch} />
					<button onClick={this.handleSubmit.bind(this)}>GO</button>
				</form>
				<UserInfo 
					personaname ={this.state.userInfo.personaname}
					profileurl = {this.state.userInfo.profileurl}
					imgUrl = {this.state.userInfo.avatarfull}
				/>

				<OverallStats
					kill = {statsObj.total_kills}
					death = {statsObj.total_deaths}
					deathRatio = {(statsObj.total_kills/statsObj.total_deaths).toFixed(4)*100 +'%'}
					headshot = {statsObj.total_kills_headshot}
					knife = {statsObj.total_kills_knife}
					wins = {statsObj.total_wins}
					winRatio ={(statsObj.total_wins/statsObj.total_rounds_played).toFixed(4)*100 +'%'}
					mvp = {statsObj.total_mvps} 
					shots = {123}
					accuracy ={100}
				/>
				
				{/*statsList*/}
				{/*achievementsList*/}


			</div>
		);
	}
}

export default Try;