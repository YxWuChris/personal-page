import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
    Name: {
        marginTop:200,
        fontFamily: 'Open Sans',
        fontSize: 40,
        marginLeft: 200,
    },
    Intro:{
        fontSize: 40,
        marginLeft: 200,
    },
    UW:{
        fontSize:40,
        marginLeft: 200,
        color: purple,
    }
    
});

const AboutMe = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.Name}>Hi There, I am Chris Wu </div> 
            <div className={classes.Intro}>A computer science student and Web Developer</div>
            <div className={classes.UW}> <a href={'http://www.washington.edu/'}>@ University of Washington</a></div>
            <div className={classes.Intro}>
            I got my computer science beacholer degree from
            </div>
        </>
    )
}

export default AboutMe