import React from 'react';

class List extends React.Component{
	render(){
		return(
			<li>
				<span>{this.props.name} :</span>
				<span>{this.props.value}</span>
			</li>

		)
	}
}

export default List;