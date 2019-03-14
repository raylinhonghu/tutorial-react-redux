import React from 'react';

const VideoItem = ({ video, onVideoClick }) => {

    return (
        <div className="item" onClick={() => onVideoClick(video)}>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium} />
            <div className="content">
                <div class="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;


