// NODE MODULES
import React from 'react';
// CUSTOM MODULES
import youTube from '../api/youtube';
// CUSTOM COMPONENTS
import SearchBar from './search-bar';
// STYLESHEETS
import '../scss/app.scss';

// App needs to be a class based component so it can hold the state of our app
class App extends React.Component {
	// search function to be passed down to our SearchBar component
	onSearchSubmit = async searchTerm => {
		console.log('Search term', searchTerm);

		const response = await youTube.get('/search', {
			params: {
				key: process.env.REACT_APP_YOUTUBE_KEY,
				maxResults: 5,
				part: 'snippet',
				q: searchTerm,
				type: 'video'
			}
		});

		console.log('response', response)
	}

	render() {
		return (
			<div className="app ui container">
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
