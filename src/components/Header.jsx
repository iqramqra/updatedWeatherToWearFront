import React from 'react'
import CityForm from './CityForm'

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';

import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Header(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // console.log(props);
    return (

        <Grid container spacing= {3}>
            {/* search input field for city */}
            <Grid item xs={12} sm={6}>
                <CityForm zipCode={props.zipCode} handleSearchTerm={props.handleSearchTerm} getData={props.getData}/>
                {/* <input type = 'text' className='searchBar' placeholder='Search by city'/> */}
            </Grid>
            {/* User Login */}
            <Grid item xs={12} sm={6}>

            <div>

                {/* ICON BUTTON */}
                <MenuIcon
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </MenuIcon>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem>Login</MenuItem>
                </Menu>
                </div>









                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Grid>
        </Grid>
    )
}

export default Header
