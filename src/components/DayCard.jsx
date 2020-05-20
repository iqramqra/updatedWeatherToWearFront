import React from 'react'
import moment from 'moment'
// var moment = require('moment');

const DayCard = ({reading}) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    return (
        <div className='dayCard'>
            {/*Day of the Week*/}
            <h3 className='wthrConditionText'>{moment(newDate).format('dddd')}</h3>
            {/* Date & time of the week */}
            <p>{moment(newDate).format('MMMM do, h:mm a')}</p>
            {/* Weather Icon */}
            <h4>IMG GOES HERE</h4>
            {/* Temp */}
            <h2>{Math.round(reading.main.temp)}°F</h2>
            <p>{reading.weather[0].description}</p>
        </div>
    )
}

export default DayCard
