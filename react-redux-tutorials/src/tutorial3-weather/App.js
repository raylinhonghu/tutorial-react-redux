import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './seasonDisplay';
import Loading from "./loading";
class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.getGeolocation = this.getGeolocation.bind(this);

    //     this.state = {
    //         location: null,
    //         errMessage: null
    //     }
    // }

    state = {
        loaction: null,
        errMessage: null
    }

    // constructor: initialiate set up

    // componentDidMount:  called when componenent first shows up on the screen , 
    //                      good position for data loading 

    // componentDidUpdate: called after render method 
    // good place for data loading, props, state changes, for example user clicks a button 

    // componentWillUnMount: do clean ups (especially for non-react libraries, etc...)

    // render: avoid doing anything beside returning jsx

    componentDidMount() {
        this.getGeolocation();
    }

    getGeolocation = () => {
        // google chrome can setup sensor for geolocation 
        console.log(navigator.geolocation.getCurrentPosition(
            position => this.setState({ location: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        ))
    }

    renderContent() {
        if (this.state.errMessage && !this.state.location) {
            return (
                <div>Error : {this.state.errMessage}</div>
            )
        } else if (this.state.location && !this.state.errMessage) {
            return (
                <SeasonDisplay latitude={this.state.location} />
            )
        } else if (!this.state.location && !this.state.errMessage) {
            return (
                <Loading message="Please accept location request" />
                // <Loading/> defaultProps
            )
        }
    }

    render() {
        // return (
        //     <div>
        //         {    
        //             (this.state.location!=null)? `LATITUDE : ${this.state.location}` : `ERR : ${this.state.errMessage}`
        //         }
        //     </div>
        // );

        // conditional rendering

        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        )
    }
}

export default App;
