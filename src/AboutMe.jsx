import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    AboutMeWords:{
        marginLeft:200,
        width:800,
        fontFamily:'Optima',
        color:'#3a3e3c',
        fontSize:30
    },
    DownloadButton:{
        marginLeft:200,
    }
})


const AboutMe = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.AboutMeWords}>
            <p>After I got my computer science Becholer degree from University of Nottingham, I went to USA continue studying and seeking a full-time job</p>
                <p> Now I am working a Full Stack Web Developer at University of Washington, College affordability group.
                    Foucusing on the Data visulization website front-end design and Server Sider Data presetation and Model
                    Layer. Before this contract, I been working as Software/Data engineer at serveral famous Tech companies before</p>
            </div>
            <div className={classes.DownloadButton}>
            <Button variant="outlined">Download CV</Button>
            </div>
        </>
    )
}

export default AboutMe