import React from 'react';

const VideoListItem = ({ video, onVideoClick }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className='list-group-item' onClick={ () => onVideoClick(video) }>
      <div className='media'>
        <img className='mr-3' src={imgUrl}/>
        <div className='media-body'>
          <h6 className='mt-0'>{ video.snippet.title }</h6>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
