import React from 'react';

// class UserInfo extends React.Component{
const UserInfo = ({imgUrl, profileurl, personaname}) => {
	// render(){
		return(
			<div className = 'userInfo row'>
				<img className ='avatar' src={imgUrl} />
				<h2><a href ={profileurl}>{personaname}</a></h2>
			</div>
		);
	// }
}

export default UserInfo;
