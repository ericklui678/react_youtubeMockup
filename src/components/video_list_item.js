import React from 'react';

// { video } equivalent to video = props.video
const VideoListItem = ({ video }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className='list-group-item'>
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
