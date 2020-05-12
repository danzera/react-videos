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

		this.setState({ videos: response.data.items });
	}

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	}

	render() {
		return (
			<div className="app ui container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
