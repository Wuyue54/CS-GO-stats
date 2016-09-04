import React from 'react';

class OverallStats extends React.Component{
	render(){
		return(
			<div className = 'overall-stats row'>
				<ul className ='col-6'>
					<li>Total Kill: <b>{this.props.kill}</b></li>
					<li>Total Death: <b>{this.props.death}</b></li>
					<li>Kill Death Ratio: <b>{this.props.deathRatio}</b></li>
					<li>Total Headshot: <b>{this.props.headshot}</b></li>
					<li>Total Knife Kill: <b>{this.props.knife}</b></li>
				</ul>	
				<ul className = 'col-6'>
					<li>Total Wins: <b>{this.props.wins}</b></li>
					<li>Win Ratio: <b>{this.props.winRatio}</b></li>
					<li>Total MVP: <b>{this.props.mvp}</b></li>
					<li>Total shots: <b>{this.props.shots}</b></li>
					<li>Accuracy: <b>{this.props.accuracy}</b></li>
				</ul>
			</div>
		);
	}
}

export default OverallStats;