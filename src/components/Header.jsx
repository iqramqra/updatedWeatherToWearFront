import React from 'react'
import { NavLink } from 'react-router-dom';
import CityForm from './CityForm'
// Matrial UI components
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Header = (props) => {

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
            </Grid>
            {/* User Login */}
            <Grid item xs={12} sm={6}>
                <div>
                    {/* ICON BUTTON */}
                    <MenuIcon aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                        <MoreVertIcon />
                    </MenuIcon>
                    {/* Menu Links */}
                    <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                        <MenuItem> <NavLink to='/login'> Login </NavLink></MenuItem>
                        <MenuItem> <NavLink to='/register'> Register </NavLink></MenuItem>
                    </Menu>
                </div>
            </Grid>
        </Grid>
    )
}
export default Header
