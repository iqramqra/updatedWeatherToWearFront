import React from 'react'
// import moment from 'moment'
// import Brooklyn from '../assets/brooklyn@2x.png'

const CityWeatherCard = (props) => {
    
    // extracts the name key from the object of city
    let{name} = props.city
    
    return (
        <div className= 'mainWeatherCard'>
            <div className='mainWeatherInfo'>
                <h6 className='wthrConditionText'>{name}</h6>
                {/* Temp goes here */}
                <h1 className= 'wthrConditionText'>{Math.round(props.reading.main.temp)}°F
                {/* icon */}
                </h1>
                {/* <i className='wi wi-day-sunny display-1'> </i> */}
                {/* Condition goes here */}
                <h6 className='wthrConditionText'>{props.reading.weather[0].description}</h6>
            </div>
         </div>
    )
}

export default CityWeatherCard
