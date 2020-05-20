import React from 'react'

const CityForm = (props) => {
    return (
        <form>
            <input type='text' className = 'searchBar' name='city' placeholder='city'/>
            <input type='text' className = 'searchBar' name='zipcode' placeholder='zipcode'/>
        </form>  
    )
}

export default CityForm;
