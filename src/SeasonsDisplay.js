import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

// Ternary Expression 
const SeasonsDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'; 
    const icon = season === 'winter' ? 'snowflake' : 'sun';

    return (
        <div>
            <i className={`${icon} icon`} />
            {text}
            <i className={`${icon} icon`} />
        </div>
    ); 
};

export default SeasonsDisplay;