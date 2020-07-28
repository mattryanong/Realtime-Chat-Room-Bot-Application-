import React from 'react';

import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core'
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background:
            "linear-gradient(180deg, #325380 10.77%, #0A1D37 99.98%, #0A1D37 100%)"
    },
    title: {
        flexGrow: 1,
    },
}));

const InfoBar = ({ room }) => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <div className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {room}
                    </Typography>
                </Toolbar>
            </div>

        </AppBar >
    );
}

export default InfoBar;