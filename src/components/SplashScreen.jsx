import React from 'react'
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function SplashScreen() {
    return (
        <>
            <h1>
                GET OUTFIT RECOMMENDATIONS DEPENDING ON YOUR WEATHER CONDITIONS
            </h1>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button>
                    <Link to='/register'> Register </Link>
                </Button>
                <Button>
                    <Link to='/login'>Log In</Link>
                </Button>
            </ButtonGroup>
        </>
    )
}

export default SplashScreen
