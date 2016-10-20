import React from 'react';
import Home from './Home';
import Search from './Search';
import Footer from './Footer';


class App extends React.Component{
	render(){
		return(
			<div className = 'container'>
				<h1>CS: GO stats</h1>
				<Search />
				{this.props.children}
				<Footer />
			</div>

		);
	}
}

export default App;
