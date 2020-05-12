// NODE MODULES
import React from 'react';
// CUSTOM MODULES
import youTube from '../api/youtube';
// CUSTOM COMPONENTS
import SearchBar from './search-bar';
import VideoDetail from './video-detail';
import VideoList from './video-list';
// STYLESHEETS
import '../scss/app.scss';

// App needs to be a class based component so it can hold the state of our app
class App extends React.Component {
	state = {
		selectedVideo: null,
		videos: []
	}

	// use componentDidMount lifecycle method to submit a default search to the youtube api
	componentDidMount() {
		this.onSearchSubmit('');
	}

	// search function to be passed down to our SearchBar component
	onSearchSubmit = async searchTerm => {
		const response = await youTube.get('/search', {
			params: {
				key: process.env.REACT_APP_YOUTUBE_KEY,
				maxResults: 5,
				part: 'snippet',
				q: searchTerm,
				type: 'video'
			}
		});

		// default the selectedVideo to the first item in the list of search results
		this.setState({
			selectedVideo: response.data.items[0],
			videos: response.data.items
		});
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div className="app ui container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
