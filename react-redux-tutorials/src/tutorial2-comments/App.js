import React, { Component } from 'react';
import './App.css';
import faker from 'faker';

var Comment1 = () => {
    return (
        <div>
            <div className="wrap">
                <div className="icon">
                    <img alt="myimage" className="myimage" />
                </div>
                <div className="infos">
                    <div className="time">May 1st</div>
                    <div className="comment"> What a beautiful day!</div>
                </div>
            </div>
        </div>
    )
}

var Comment2 = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>

                <div className="content">
                    <a href="/" className="author">
                        {faker.finance.accountName()}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {faker.date.past().toLocaleDateString()}
                        </span>
                    </div>
                    <div className="text">
                        {faker.lorem.sentence()}
                    </div>
                </div>
            </div>
        </div>
    )
}

class App extends Component {


    render() {
        return (
            <div>
                {/* <Comment1 />
              <Comment1 />
              <Comment1 /> */}

              <Comment2 />
              <Comment2 />
              <Comment2 />
            </div>
        );
    }
}

export default App;
