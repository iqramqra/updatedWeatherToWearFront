import React from 'react'
import MainWeatherCard from '../components/MainWeatherCard'
import DayCard from '../components/DayCard'

const WeatherContainer = (props) => {
    // console.log(props);
    
    let  dataDayCard = () => {
        return props.dailyWeatherData.map((reading, index) => <DayCard reading={reading} key={index}/>)
    }
    
    // let toadyData = props.dailyWeatherData.map((reading, index) => {
    //     if (index === 0) {
    //         // console.log(reading)
    //         return <MainWeatherCard reading={reading} key={index}/>
    //     }
    // })

    let toadyData = props.dailyWeatherData.map((reading, index) => {
        if (index === 0){
            return <MainWeatherCard reading={reading} key={index}/>
        }

    }) 

    // console.log(props.dailyWeatherData[0])
    // debugger
    return (
        <div className='weatherContainer'>
            {/* {<MainWeatherCard reading={props.dailyWeatherData[0]}/>} */}
            {toadyData}
            <div className = 'dailyCardContainer'>
                {dataDayCard()}
            </div>
        </div>
    )
}

export default WeatherContainer;