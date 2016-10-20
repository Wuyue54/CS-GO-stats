import React from 'react';
import Home from './Home';
import Search from './Search';
import Footer from './Footer';


const App = ({children})=>{
		return(
			<div className = 'container'>
				<h1>CS: GO stats</h1>
				<Search />
				{children}
				<Footer />
			</div>
		);
}

export default App;
