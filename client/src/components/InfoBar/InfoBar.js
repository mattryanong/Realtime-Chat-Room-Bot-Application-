import React from 'react';

import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const InfoBar = ({ room }) => {

    const classes = useStyles();

    return (
        // <div className="infoBar">
        //     <div className="leftInnerContainer">
        //         <img className="onlineIcon" src={onlineIcon} alt="online" />
        //         <h3>{room}</h3>
        //     </div>
        //     <div className="rightInnerContainer">
        //         <a href="/"><img src={closeIcon} alt="close" /></a>
        //     </div>
        // </div>

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {room}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>


    );
}

export default InfoBar;