import React, { Component } from 'react';
import './App.css';
import faker from 'faker';
import ApprovalCard from './approval';
import ApprovalCard2 from './approval-children';
import Comment2 from './comment2';


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

class App extends Component {

    render() {
        return (
            <div>
                <div className="ui cards">
                    <ApprovalCard author={faker.finance.accountName()}
                        time={faker.date.past().toLocaleDateString()}
                        sentence={faker.lorem.sentence()}
                        avatar={faker.image.avatar()}
                    />
                    <ApprovalCard author={faker.finance.accountName()}
                        time={faker.date.past().toLocaleDateString()}
                        sentence={faker.lorem.sentence()}
                        avatar={faker.image.avatar()}
                    />
                    <ApprovalCard2>
                        <Comment2 author={faker.finance.accountName()}
                        time={faker.date.past().toLocaleDateString()}
                        sentence={faker.lorem.sentence()}
                        avatar={faker.image.avatar()}
                        />
                    </ApprovalCard2>
                </div>
            </div>
        );
    }
}

export default App;
