import React from 'react'
// import { Link } from "react-router-dom";

import {Avatar, Grid} from '@material-ui/core';
import { spacing } from '@material-ui/system';

function header() {
    return (
        <Grid container spacing={10}>
            <Grid item xs={6}>
                W2W
            </Grid>

            <Grid item xs={6}>
                <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
                {/* <Link to='/signin'> Sign In </Link> */}
            </Grid>
        </Grid>

    )
}

export default header
