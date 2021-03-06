import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Input, Box, Button } from '@material-ui/core'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <Container maxWidth="sm">
            <Typography variant="h3" align="center" gutterBottom>Speak to an agent</Typography>
            <Box mt={2}><Input mt={2} placeholder="Name" fullWidth type="text" onChange={(event) => setName(event.target.value)} /></Box>
            <Box mt={2}><Input mt={2} placeholder="Room" fullWidth type="text" onChange={(event) => setRoom(event.target.value)} /></Box>
            <Box mt={2}>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <Button variant="contained" color="primary" fullWidth>Sign In</Button>
                </Link>
            </Box>
        </Container>
    )
}

export default Join;