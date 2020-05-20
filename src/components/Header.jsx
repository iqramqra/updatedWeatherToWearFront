import React from 'react'
import CityForm from './CityForm'

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

function Header() {
    return (

        <Grid container spacing= {3}>
           
            {/* search input field for city */}
            <Grid item xs={12} sm={6}>
            <CityForm/>
                {/* <input type = 'text' className='searchBar' placeholder='Search by city'/> */}
            </Grid>
            {/* User Login */}
            <Grid item xs={12} sm={6}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Grid>
        </Grid>
    )
}

export default Header
