import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // console.log(props.videos);
  // const videos = props.videos.map ((video, i) => <li key={i}>1</li>)
  // console.log(videos);

  const videoItems = props.videos.map((video, i) => {
    return <VideoListItem key={i} video={video} />
  });

  return (
    <ul className='col-md-4 list-group'>
      { videoItems }
    </ul>
  );
}

export default VideoList;
