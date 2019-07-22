import React from 'react';
import './SeasonDisplay.css';

const SeasonsDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
                {text}
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    ); 
};

const seasonConfig = {
    summer: {
        text: 'lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

// Ternary Expression 

export default SeasonsDisplay;