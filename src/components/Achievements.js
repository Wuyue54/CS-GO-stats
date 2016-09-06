import React from 'react';

class Achievements extends React.Component{
	render(){

		let achievements = [];

		this.props.achievements.forEach((d ,index)=>{
			achievements.push(
				<li key ={index}>
					<img src = {d.icon} />
					<span>{d.displayName} </span>
					<span>{d.description}</span>
				</li>

			);
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