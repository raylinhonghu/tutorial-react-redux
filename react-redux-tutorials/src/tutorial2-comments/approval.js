import React from 'react';
import Comment2 from './comment2';

var ApprovalCard = (props) => {
    return (

            <div className="card">
                <div className="content">
                <Comment2 author={props.author}
                    time={props.time}
                    sentence={props.sentence}
                    avatar={props.avatar} 
                />
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
            </div>
    )
}


export default ApprovalCard;