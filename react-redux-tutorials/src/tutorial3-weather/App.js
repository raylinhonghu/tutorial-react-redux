import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './seasonDisplay';

class App extends Component {

    constructor(props) {
        super(props);
        this.getGeolocation = this.getGeolocation.bind(this);

        this.state = {
            location: null,
            errMessage: null
        }
    }

    componentWillMount() {
        this.getGeolocation();
    }
    getGeolocation = () => {
        // google chrome can setup sensor for geolocation 
        console.log(navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position);
                // setTimeout(() => {
                this.setState({
                    location: position.coords.latitude
                })
                // }, 1000);
            },
            (err) => {
                this.setState({ errMessage: err.message })
            }
        ))
    }

    render() {
        // return (
        //     <div>
        //         {
        //             (this.state.location!=null)? `LATITUDE : ${this.state.location}` : `ERR : ${this.state.errMessage}`
        //         }
        //     </div>
        // );
        console.log(this.state)
        
        if(this.state.errMessage && !this.state.location){
            return (
                <div>Error : {this.state.errMessage}</div>
            )
        }else if(this.state.location && !this.state.errMessage){
            return (
                <div>LATITUDE : {this.state.location}</div>
            )
        }else if(!this.state.location && !this.state.errMessage){
            return (
                <div>Loading...</div>
            )
        }
    }
}

export default App;
