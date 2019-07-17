import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

// Ternary Expression 
const SeasonsDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'Winter' ? 'Burr, its is chilly' : 'Let hit the beach'
    const icon = season === 'Winter' ? 'Snowflake' : 'Sun'

    return (
        <div>
            <i>className = {`${icon} icon`}</i>
            <h1>{text}</h1> 
            <i>className = {`${icon} icon`}</i>
        </div>
    );
};

export default SeasonsDisplay