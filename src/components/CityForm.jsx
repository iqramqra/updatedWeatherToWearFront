import React from 'react'

const CityForm = (props) => {
    
    const helpWithChange = (e) => {
        props.handleSearchTerm(e.target.value);
    }
    // sends up the zipcide eneterd by the user to the getData() in the app.js 
    const handleSubmit = (e) => {
        e.preventDefault()
        var text = document.getElementById('zipCode').value;
        // sending up the value of 'text' to the getData fn in app.js
        props.getData(text)
    }

    return (
        <div className='zipCodeForm'>
            <input type='text'
                id='zipCode'
                name='zipCode'
                className = 'searchBar'
                autoComplete='off'
                placeholder='Enter your Zipcode'
                onChange={helpWithChange}
                value = {props.zipCode}
                />
            <button className= 'zipCodeBtn' type='submit' value='sumbit' onClick={handleSubmit}>Get Weather</button>
            {/* <div className='searchBtn'> 
            </div> */}
        </div>
    )
}

export default CityForm;
