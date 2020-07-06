import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBar from './NavigateBar';
import AboutMe from './AboutMe'

const useStyles = makeStyles({
    root: {
        height:2000
    }
  });

const MainPage=()=>{
const classes = useStyles();

return(
    <div className={classes.root}>
        <NavigateBar />
        <AboutMe />
    </div>
)
}

export default MainPage