import React from 'react';

const List = ({name,value})=>{
		return(
			<li>
				<span>{name} :</span>
				<span>{value}</span>
			</li>
		);
}

export default List;
