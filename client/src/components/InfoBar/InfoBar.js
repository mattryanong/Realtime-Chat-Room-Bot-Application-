import React from 'react';

import { makeStyles, Toolbar, Typography } from '@material-ui/core'

import './InfoBar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        background:
            "linear-gradient(180deg, #325380 10.77%, #0A1D37 99.98%, #0A1D37 100%)"
    },
    title: {
        flexGrow: 1,
        color: '#FFFFFF'
    },
}));

const InfoBar = ({ room }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar position="absolute">
                <Typography variant="h6" className={classes.title}>
                    {room}
                </Typography>
            </Toolbar>
        </div>
    );
}

export default InfoBar;