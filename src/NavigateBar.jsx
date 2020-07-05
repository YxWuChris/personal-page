import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AboutMe from './AboutMe'

const useStyles = makeStyles({
    NaviName: {
        width: 200,
        fontFamily: 'Open Sans',
        marginLeft: 200,
        marginRight:100,
        display: 'inline',
    },
    NaviButton: {
        width: 200,
        fontFamily: 'Open Sans'
    },
    ContactButton:{
        marginLeft:300,
    }
});

const NavigateBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (<>
        <h2 className={classes.NaviName}>CHRIS WU.</h2>
        <Button className={classes.NaviButton}>Home</Button>
        <Button className={classes.NaviButton}>About Me</Button>
        <Button className={classes.NaviButton}>Projects</Button>
        <Button className={classes.NaviButton}>Experience</Button>
        <Button variant="outlined">Contact Me</Button>
        <AboutMe />
    </>
    );
}

export default NavigateBar