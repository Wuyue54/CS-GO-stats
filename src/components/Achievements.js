import React from 'react';

class Achievements extends React.Component{
	render(){

		let achievements = [];
		let activeAchieve = this.props.achievements;

		this.props.achievementSchema.forEach((d ,index)=>{
			if(activeAchieve.hasOwnProperty(d.name)){
				achievements.push(
					<li key ={index}>
						<img src = {d.icon} />
						<span>{d.displayName} </span>
						<span>{d.description}</span>
					</li>

				);
			}else{
				achievements.push(
					<li key ={index}>
						<img src = {d.icongray} />
						<span>{d.displayName} </span>
						<span>{d.description}</span>
					</li>

				);
			}
			
		});



		return(
			<div className = 'row achievements-list'>
				<ul>
					{achievements}
				</ul>
			</div>
		);
	}
}

export default Achievements;