import React from 'react';

class UserInfo extends React.Component{
	render(){
		return(
			<div className = 'userInfo row'>
				<img className ='avatar' src={this.props.imgUrl} />
				<h2><a href ={this.props.profileurl}>{this.props.personaname}</a></h2>
			</div>
		);
	}
}

export default UserInfo;
