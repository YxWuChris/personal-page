import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBar from './NavigateBar'

const useStyles = makeStyles({
    root: {
        backgroundColor: "#a98539"
    },
  });

const MainPage=()=>{
const classes = useStyles();

return(
    <div className={classes.root}>
        <NavigateBar />
    </div>
)
}

export default MainPage