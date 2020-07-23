import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Input, Box, Button } from '@material-ui/core'

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Speak to an agent</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /> </div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /> </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>


        // <Container maxWidth="sm">
        //     <Typography variant="h3" align="center" gutterBottom>Speak to an agent</Typography>
        //     <Box mt={2}><Input mt={2} placeholder="Name" fullWidth type="text" onChange={(event) => setName(event.target.value)} /></Box>
        //     <Box mt={2}><Input mt={2} placeholder="Room" fullWidth type="text" onChange={(event) => setRoom(event.target.value)} /></Box>
        //     <Box mt={2}>
        //         <Button variant="contained" color="primary" fullWidth>Sign In
        //             <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}></Link>
        //         </Button>
        //     </Box>
        // </Container>
    )
}

export default Join;