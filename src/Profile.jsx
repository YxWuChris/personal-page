import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
    Name: {
        marginTop:200,
        fontFamily: 'Optima',
        fontSize: 50,
        marginLeft: 200,
    },
    Intro:{
        fontFamily: 'Optima',
        fontSize: 40,
        marginLeft: 200,
        marginTop:100,
    },
    UW:{
        fontSize:40,
        fontFamily: 'Optima',
        marginLeft: 200,
        color: purple,
    },
});

const Profile = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.Name}>Hi There, I am Chris Wu </div> 
            <div className={classes.Intro}>A computer science student and Web Developer</div>
            <div className={classes.UW}> <a href={'http://www.washington.edu/'}>@ University of Washington</a></div>
        </>
    )
}

export default Profile