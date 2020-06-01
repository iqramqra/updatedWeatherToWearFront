import React from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const UserProfile = (props) => {
    const classes = useStyles();
    console.log(props.user);
    
    let {username, avatar } = props.user
    return (
        <div>
            This is {username}'s Home Page
            <Avatar variant="circle" alt={username} src = {avatar} className={classes.large}/>
        </div>
    )
}

export default UserProfile
