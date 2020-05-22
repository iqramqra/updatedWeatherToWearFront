import React from 'react'
import MainWeatherCard from '../components/MainWeatherCard'
import DayCard from '../components/DayCard'

const WeatherContainer = (props) => {
    // console.log(props);
    
    let  dataDayCard = () => {
        return props.dailyWeatherData.map((reading, index) => <DayCard reading={reading} key={index}/>)
    }

    // REFACTORING CODE STARTS HERE
    // let _todayData = [...props.dailyWeatherData].shift()
    // console.log(_todayData);
    
    let toadyData = props.dailyWeatherData.map((reading, index) => {
        if (index === 0){
            return <MainWeatherCard reading={reading} key={index} city={props.cityNameWD}/>
        }
    }) 

    return (
        <div className='weatherContainer'>
            {/* MAIN CONTAINER */}
            {toadyData}

            {/* SINGLE DAY CARDS */}
            <div className='dailyCardContainer'>
                {dataDayCard()}
            </div>
        </div>
    )
}

export default WeatherContainer;