import React from 'react';
import VideoItem from './video-item';

// destructure props so we can just reference 'videos' directly
const VideoList = ({ videos }) => {
	console.log(videos)
	const videoItemsList = videos.map(video => {
		return <VideoItem key={video.id.videoId} video={video} />;
	});
	
	return (
		<div className="video-list ui relaxed divided list">
			{videoItemsList}
		</div>
	)
}

export default VideoList;