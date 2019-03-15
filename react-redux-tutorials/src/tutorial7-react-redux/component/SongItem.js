import React from 'react';

const SongItem = (props) => {
    const { title, duration} = props.song;
    return (
        <div className="item">
            <div className="right floated content">
                <button className="ui button primary">
                    SELECT
                </button>
            </div>
            <div className="content">
                {title}
            </div>
        </div>
    )
}

export default SongItem;