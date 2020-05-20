import React from 'react'
import moment from 'moment'
import Brooklyn from '../assets/brooklyn@2x.png'

const CityWeatherCard = ({reading}) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)
    
    return (
        <div className= 'mainWeatherCard'>
            <img src={Brooklyn} alt='city'/>
            <div className='mainWeatherInfo'>
                {/* Temp goes here */}
                <h1 className= 'wthrConditionText'>{Math.round(reading.main.temp)}°F</h1>
                {/* Condition goes here */}
                <h6 className='wthrConditionText'>{reading.weather[0].description}</h6>
            </div>
         </div>
    )
}

export default CityWeatherCard
