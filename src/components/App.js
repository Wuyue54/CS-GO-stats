import React from 'react';
import Try from './Try';
import Footer from './Footer';


class App extends React.Component{
	render(){
		return(
			<div className = 'container'>
				<h1>CS: GO stats</h1>
				<Try />
				<Footer />
			</div>

		);
	}
}

export default App;