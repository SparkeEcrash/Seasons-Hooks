import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month< 9) {                //this checks for summer in northern hemisphere
        return lat > 0 ? 'summer' : 'winter';   //return summer if lat is in northern hemisphere 
    } else {
        return lat > 0 ? 'winter': 'summer';    //return winter if lat is in southern hemisphere
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    // text becomes var text that gets assigned the value of key text in summer or winter object
    // iconName becomes var iconName that gets assigned the value of key iconName in summer or winter object


    // const text = season === 'winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach!';
    // const iconName = season === 'winter' ? 'snowflake': 'sun';
    
    // return <div>{season === 'winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach!'}</div>
    //curly braces can hold ternary expressions

    return (
    <div className={`season-display ${season}`} >                   
    {/* Always have class name 'season-display' (coming from component name of SeasonDisplay) attached to the ultimate parent element for styling purposes */}
        <i className={`icon-left massive ${iconName} icon`} />
            {/* inside JSX you need to use ` ` to write strings that hold javascript variables (with ${...}) concatenated with string texts */}
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    )
}


export default SeasonDisplay;