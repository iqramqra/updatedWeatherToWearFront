import React from 'react'
import Header from '../components/Header'
import UserSidebar from './UserSidebar'
import WeatherPanel from '../components/WeatherPanel'
import ShirtRec from '../components/ShirtRec'
import PantsRec from '../components/PantsRec'
import ShuffleBtn from './ShuffleBtn'

function UserDashboard() {
    return (
        <div>
            <Header/>
            <h1>
                Hello from the user UserDashboard
            </h1>
            <UserSidebar/>
            <WeatherPanel/>
            <ShirtRec/>
            <PantsRec/>
            <ShuffleBtn/>
        </div>
    )
}

export default UserDashboard

