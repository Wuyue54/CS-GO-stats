import React from 'react';

class UserInfo extends React.Component{
	render(){
		return(
			<div>
				<h6><a href ={this.props.profileurl}> {this.props.personaname}</a></h6>
				<img src={this.props.imgUrl} />
				<ul>
					{this.props.totalKill?<li>Total Kill: {this.props.totalKill}</li>:null}
				</ul>
			</div>
		);
	}
}

export default UserInfo;