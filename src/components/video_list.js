import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video, i) => {
    return <VideoListItem key={i} video={video} />
  });

  return (
    <ul className='col list-group'>
      { videoItems }
    </ul>
  );
}

export default VideoList;
