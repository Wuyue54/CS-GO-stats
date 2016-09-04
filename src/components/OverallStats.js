import React from 'react';

class OverallStats extends React.Component{
	render(){
		return(
			<div>
				<ul>
					<li>Total Kill: {this.props.kill}</li>
					<li>Total Death: {this.props.death}</li>
					<li>Kill Death Ratio: {this.props.deathRatio}</li>
					<li>Total Headshot: {this.props.headshot}</li>
					<li>Total Knife Kill: {this.props.knife}</li>
				</ul>	
				<ul>
					<li>Total Wins: {this.props.wins}</li>
					<li>Win Ratio: {this.props.winRatio}</li>
					<li>Total MVP: {this.props.mvp}</li>
					<li>Total shots: {this.props.shots}</li>
					<li>Accuracy: {this.props.accuracy}</li>
				</ul>
			</div>
		);
	}
}

export default OverallStats;