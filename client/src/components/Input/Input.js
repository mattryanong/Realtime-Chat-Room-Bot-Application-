import React from 'react';

import './Input.css';

import { makeStyles, TextField, Box, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const Input = ({ message, setMessage, sendMessage }) => {

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        className="input"
                        type="text"
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                    />
                </Box>
                <Box p={1}>
                    <IconButton
                        fullWidth
                        size='large'
                        variant="contained"
                        color="primary"
                        onClick={(event) => sendMessage(event)}>
                            <SendIcon/>
                    </IconButton>
                </Box>
            </Box>
        </form>
    );
}

export default Input;