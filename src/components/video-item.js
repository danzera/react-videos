import React from 'react';

const VideoItem = ({ video }) => {
	console.log('snippet', video.snippet)

	return (
		<div className="video-item item">
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
