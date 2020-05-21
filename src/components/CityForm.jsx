import React from 'react'

const CityForm = (props) => {
//    console.log(props);
   
    const helpWithChange = (e) => {
        props.handleSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        var text = document.getElementById('zipCode').value;
        props.getData(text)
        // console.log(text)
    }

    return (
        <form onSubmit = {props.changeZipCode}>
            <input type='text'
                id='zipCode'
                name='zipCode'
                className = 'searchBar'
                autoComplete='off'
                placeholder='Enter your Zipcode'
                onChange={helpWithChange}
                value = {props.zipCode}
                />
            <div className='searchBtn'> 
                <button type='submit' value='sumbit' onClick={handleSubmit}>Get Weather</button>
            </div>
        </form>
    )
}

export default CityForm;

// handleSearchTerm = (e) => {
//     if (e.key === 'enter') {
//       fetch (`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode}&units=imperial&appid=a6cb209a99baafd785ecd07da0491103`)
//       .then (r => r.json())
//       .then(r => {
//         const _dailyWeatherData = r.list.filter(reading => reading.dt_txt.includes('18:00:00'))
//         this.setState({
//           fullWeatherData: r.list,
//           dailyWeatherData: _dailyWeatherData
//         })
//         console.log(r)
//       })
//     }
//   }
