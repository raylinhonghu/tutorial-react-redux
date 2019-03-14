import React from 'react';
import VideoItem from './VideoItem';


class VideoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.props.videos.map((video, index) => {
                    return <VideoItem onVideoClick={this.props.onVideoClick} key={video.id} video={video} />
                })}
            </div>
        )
    }
}

export default VideoList;