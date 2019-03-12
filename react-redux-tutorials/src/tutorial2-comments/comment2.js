import React from 'react';

var Comment2 = (props) => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>

                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.time}
                        </span>
                    </div>
                    <div className="text">
                        {props.sententce}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Comment2;