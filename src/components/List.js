import React from 'react';

const List = ({name,value})=>{
		return(
			<li>
				<span>{this.props.name} :</span>
				<span>{this.props.value}</span>
			</li>

		);
}

export default List;
