import React from 'react';
import './App.css';

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, its too cold",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'summer' : 'winter'
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.latitude, new Date().getMonth())

    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left icon massive`}></i>
            <h1> {text}</h1>
            <i className={`${iconName} icon-right icon massive`}></i>
        </div> 
    )
}

export default SeasonDisplay;