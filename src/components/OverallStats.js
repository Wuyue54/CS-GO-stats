import React from 'react';

const OverallStats = ({kill, death, deathRatio, headshot, knife, wins, winRatio, mvp, shots, accuracy}) =>{
		return(
			<div className = 'overall-stats row'>
				<ul className ='col-6'>
					<li>Total Kill: <b>{kill}</b></li>
					<li>Total Death: <b>{death}</b></li>
					<li>Kill Death Ratio: <b>{deathRatio}</b></li>
					<li>Total Headshot: <b>{headshot}</b></li>
					<li>Total Knife Kill: <b>{knife}</b></li>
				</ul>
				<ul className = 'col-6'>
					<li>Total Wins: <b>{wins}</b></li>
					<li>Win Ratio: <b>{winRatio}</b></li>
					<li>Total MVP: <b>{mvp}</b></li>
					<li>Total shots: <b>{shots}</b></li>
					<li>Accuracy: <b>{accuracy}</b></li>
				</ul>
			</div>
		);
}

export default OverallStats;
