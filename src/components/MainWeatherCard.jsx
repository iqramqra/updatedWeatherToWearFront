import React from 'react'
import moment from 'moment'
import Brooklyn from '../assets/brooklyn@2x.png'

const CityWeatherCard = ({reading}) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)
    
    return (
        <div className= 'mainWeatherCard'>
            <div className='mainWeatherInfo'>
                {/* Temp goes here */}
                <h1 className= 'wthrConditionText'>{Math.round(reading.main.temp)}°F
                
                {/* icon */}
                </h1>
                <i className='wi wi-day-sunny display-1'> </i>
                {/* Condition goes here */}
                <h6 className='wthrConditionText'>{reading.weather[0].description}</h6>

            </div>
            {/* <img src={Brooklyn} alt='city'/> */}
         </div>
    )
}

export default CityWeatherCard
