import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './seasonDisplay';
import Loading from "./loading";
import userLocation from './useLocation';


const App = () => {

    let [location, error] = userLocation();


    let content = null;
    if (error && !location) {
        content = <div>Error : {error}</div>
    } else if (location && !error) {
        content = <SeasonDisplay latitude={location} />
    } else if (!location && !error) {
        content = <Loading message="Please accept location request" />
    }

    return (
        <div className="border-red">
            {content}
        </div>
    )

}

export default App;
