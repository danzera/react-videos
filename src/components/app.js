import React from 'react';
import SearchBar from './search-bar';
import '../scss/app.scss';

class App extends React.Component {
	render() {
		return (
			<div className="app ui container">
				<SearchBar />
			</div>
		);
	}
}

export default App;
