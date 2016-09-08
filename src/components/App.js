import React from 'react';
import Home from './Home';
import Try from './Try';
import Footer from './Footer';


class App extends React.Component{
	render(){
		return(
			<div className = 'container'>
				<h1>CS: GO stats</h1>
			{/*this.props.children*/}
				<Try  history = {this.props.history}/>
				<Footer />
			</div>

		);
	}
}

export default App;