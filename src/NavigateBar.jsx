import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Profile from './Profile'
import headBackground from './headBackground.jpg'

const useStyles = makeStyles({
    NaviRoot:{
        backgroundImage:`url(${headBackground})`,
        backgroundSize: 'cover',
        height:800
    },
    NaviName: {
        width: 200,
        fontFamily: 'Open Sans',
        marginTop: 50,
        marginLeft: 200,
        marginRight:100,
        display: 'inline',
    },
    NaviButton: {
        width: 200,
        marginTop: 50,
        fontFamily: 'Open Sans'
    },
    ContactButton:{
        marginTop: 50,
        marginLeft:300,
    }
});

const NavigateBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (<div className={classes.NaviRoot}>
        <h2 className={classes.NaviName}>CHRIS WU.</h2>
        <Button className={classes.NaviButton}>Home</Button>
        <Button className={classes.NaviButton}>About Me</Button>
        <Button className={classes.NaviButton}>Projects</Button>
        <Button className={classes.NaviButton}>Experience</Button>
        <Button variant="outlined">Contact Me</Button>
        <Profile />
    </div>
    );
}

export default NavigateBar