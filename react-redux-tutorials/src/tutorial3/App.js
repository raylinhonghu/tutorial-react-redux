import React, { Component } from 'react';
import './App.css';

function transform(offset) {
    var sin = Math.sin(offset);
    var cos = Math.cos(offset);

    return {
        transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}
            ,${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin},0,0,0,1)`
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            styleOne: {},
            styleTwo: {}
        }
        this.onMouseMove = this.onMouseMove.bind(this)
    }

    onMouseMove(event) {
        // event.persist()
        // console.log(event)
        // var e = event;
        console.log(event.clientX)
        console.log(event.clientY)

        // console.log('111')
        this.setState({
            styleOne: transform(-event.clientX/event.clientY),
            styleTwo: transform(event.clientX/event.clientY),
        })
    }


    render() {
        return (
            <div onMouseMove={(e)=>this.onMouseMove(e)} >
                <div className="panel" style={this.state.styleOne}>12</div>
                <div className="panel" style={this.state.styleTwo}>12</div>
            </div>
        );
    }
}

export default App;
