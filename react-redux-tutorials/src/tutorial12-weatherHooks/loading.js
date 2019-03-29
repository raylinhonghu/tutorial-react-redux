import React, { PureComponent } from 'react';

const Loading = (props) => {
    return (
        <div class="ui segment" className="loader-size">
            <div class="ui active dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    )
}

Loading.defaultProps = {
    message: "Loading..."
};

export default Loading;
