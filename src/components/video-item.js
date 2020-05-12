import React from 'react';

const VideoItem = ({ onVideoSelect, video }) => {
	console.log('snippet', video.snippet)

	return (
		<div className="video-item item" onClick={e => onVideoSelect(video)}>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">
					{video.snippet.title}
				</div>
			</div>
		</div>
	)
}

export default VideoItem;
